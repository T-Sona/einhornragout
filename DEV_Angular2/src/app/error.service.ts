import { Injectable } from '@angular/core';

@Injectable()
export class ErrorService {
  private error = {
    "show": false,
    "text": "test"
  }

  private success = {
    "show": false,
    "text": "text"
  }

  private gear = {
    "show": false,
    "text": "text"
  }

  constructor() { }

  throwError(text){
    this.error.text = text;
    this.error.show = true;
  }
  resetError(){
    this.error.text = "";
    this.error.show = false;
  }

  throwSuccess(text){
    this.success.text = text;
    this.success.show = true;
  }
  resetSuccess(){
    this.success.text = "";
    this.success.show = false;
  }

  throwGear(text){
    this.gear.text = text;
    this.gear.show = true;
  }
  resetGear(){
    this.gear.text = "";
    this.gear.show = false;
  }
}
