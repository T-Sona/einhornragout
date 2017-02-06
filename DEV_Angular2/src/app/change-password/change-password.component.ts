import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public showSuc = false;
  public showError = false;
  public closable = true;

  public checkPassword() {

    var oldPW = (<HTMLInputElement>document.getElementById('oldPW')).value;
    var newPW1 = (<HTMLInputElement>document.getElementById('newPW1')).value;
    var newPW2 = (<HTMLInputElement>document.getElementById('newPW2')).value;

    if(newPW1 == newPW2 && oldPW != newPW1) {
      console.log("Passwort richtig");
      this.showSuc = true;
      console.log("Wert:"+this.showSuc);
      console.log("Wert:"+this.showError);
    } else {
      console.log("Passwort falsch");
      this.showError = true;
    }

  }

  close() {
    this.showSuc = false;
    this.showError = false;
  }
}
