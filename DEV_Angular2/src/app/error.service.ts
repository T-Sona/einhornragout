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


}
