import { Injectable } from '@angular/core';

@Injectable()
export class BodyDynamicsService {

  public ChapterColor = "#fff3d8";

  constructor() { }

  changeBackground(newColor){
    this.ChapterColor=newColor;
  }
}
