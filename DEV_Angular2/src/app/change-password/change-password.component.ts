import {Component, OnInit} from '@angular/core';
import { ErrorService } from '../error.service';
import { ApiCommunicatorService } from '../api-communicator.service';
import { Title } from '@angular/platform-browser';

const API_DATA = require('../api.json')

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  private oldPW;
  private newPW1;
  private newPW2;

  constructor(private errorService: ErrorService, private apiCommunicatorService:ApiCommunicatorService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle( "CHECK! - Passwort ändern" );
  }

  public checkPassword() {

    this.oldPW = (<HTMLInputElement>document.getElementById('oldPW')).value;
    this.newPW1 = (<HTMLInputElement>document.getElementById('newPW1')).value;
    this.newPW2 = (<HTMLInputElement>document.getElementById('newPW2')).value;


    if (this.newPW1.length <7){
    } else if(this.newPW1 !== this.newPW2) {
      this.errorService.throwError("Die Passwörter stimmen nicht überein, bitte versuchen Sie es erneut!");
    } else if (this.oldPW === this.newPW1) {
      this.errorService.throwError("Das alte Passwort darf nicht mit dem neuen übereinstimmen!");
    } else {
      let body = {"newpassword": this.newPW1,"password": this.oldPW}
      this.apiCommunicatorService.putWithHeader(API_DATA.chgPassword, body).subscribe((res: any) => this.errorService.throwSuccess("Passwortänderung erfolgreich!"),(err) => this.errorService.throwError("Passworteingabe falsch, bitte versuchen Sie es erneut!"));
    /*  let username = (!!sessionStorage.getItem("username"))? sessionStorage.getItem("username") : localStorage.getItem("username");
        let credentials = {"username": username, "password": this.oldPW};
        this.apiCommunicatorService.put(API_DATA.login, credentials).subscribe((res: any) => {
            if(oldToken === JSON.stringify(res["token"])){
              console.log("token passt");
              this.errorService.throwSuccess("Passwortänderung erfolgreich!");
            } else{
              this.errorService.throwError("Passworteingabe falsch, bitte versuchen Sie es erneut!");
            }
          });
    */

  }

  }
}
