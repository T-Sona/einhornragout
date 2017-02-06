import { Injectable } from '@angular/core';
import { ApiCommunicatorService } from './api-communicator.service';

@Injectable()
export class LoginService {
  private loggedIn = false;
  private matchPassword = false;

  constructor(private apiCommunicatorService:ApiCommunicatorService) {
    this.loggedIn = !!sessionStorage.getItem('auth_token');
    if(!this.loggedIn){
      this.loggedIn = !!localStorage.getItem('auth_token');
    }
  }

  login(username, password, savedLogin) {
    let credentials = {"username": username, "password": password};
    localStorage.setItem('username', username);

    return this.apiCommunicatorService.put("/login", credentials)
      .map((res: Array<Object>) => {
        if (savedLogin) {
          localStorage.setItem('auth_token', JSON.stringify(res["token"]));
        } else {
          sessionStorage.setItem('auth_token', JSON.stringify(res["token"]));
        }
        return this.loggedIn = true;
      });
  }

  public testPassword (password) {
    let credentials = {"username": localStorage.getItem('username'), "password": password};

    this.apiCommunicatorService.put("/login", credentials).subscribe((res: Array<Object>) => {
      if(JSON.stringify(res["token"])===localStorage.getItem('auth_token') || (JSON.stringify(res["token"])===sessionStorage.getItem('auth_token'))){
        this.matchPassword = true;
      }
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
