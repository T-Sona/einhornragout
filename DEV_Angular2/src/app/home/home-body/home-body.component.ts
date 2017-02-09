import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginService} from '../../login.service';
import {ErrorService} from '../../error.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home-body',
  templateUrl: 'home-body.component.html',
  styleUrls: ['home-body.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeBodyComponent implements OnInit {


  constructor(private loginService: LoginService, private router: Router, private errorService: ErrorService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("CHECK! - Login");
    console.log("LoggedIn:" + this.loginService.isLoggedIn());
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(["../main"]);
    }
  }

  private login(username, password, savedLogin) {
    console.log("username: " + username + " | password: " + password + " | savedLogin:" + !!savedLogin);
    this.loginService.login(username, password, !!savedLogin).subscribe(res => this.router.navigate(["../main"]), (err) => {
      this.errorService.throwError("Ihre Eingaben sind nicht korrekt, bitte versuchen sie es erneut!");
    });
  }

  showDialog = false;


}





