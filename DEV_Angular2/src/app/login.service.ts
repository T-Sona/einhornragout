import { Injectable } from '@angular/core';
import { ApiCommunicatorService } from './api-communicator.service';

@Injectable()
export class LoginService {
  private loggedIn = false;

  constructor(private apiCommunicatorService:ApiCommunicatorService) {
    this.loggedIn = !!sessionStorage.getItem('auth_token');
    if(!this.loggedIn){
      this.loggedIn = !!localStorage.getItem('auth_token');
    }
  }

 login(username,password,savedLogin) {
    let credentials= { "username": username, "password": password };

    return this.apiCommunicatorService.put("/login", credentials)
        .subscribe((res: Array<Object>) => {
          if(savedLogin){
            localStorage.setItem('auth_token', JSON.stringify(res["token"]));
          } else {
            sessionStorage.setItem('auth_token', JSON.stringify(res["token"]));
          }
          this.loggedIn = true;
          console.log("login Service: "+JSON.stringify(res["token"]));
        });
 }

  logout() {
    localStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
}

}
