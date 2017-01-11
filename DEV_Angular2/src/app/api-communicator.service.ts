import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

const API_DATA = require('./api.json')

@Injectable()
export class ApiCommunicatorService {
  private token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZmFyaW4ifQ.JkX7avKZDA52b_A-eg-l8rJCilmBZbkyuYCJS01Zlc4";

  constructor(private http: Http) {}

  private getJsonFromApi(url){

    var authHeader = new Headers();
    authHeader.append('Authorization', this.token);
    console.log(API_DATA.server+url);
    return this.http.get(API_DATA["server"]+url, {headers: authHeader})
                    .map((res: Response) =>  res.json());
  }

  put(url, body){
    return this.http.put(API_DATA.server+url,body).map((res:Response)=> res.json());
  }

  studentLogin(){
    let credentials= { "username": "farin", "password": "MKD" };
    this.put("/login", credentials).subscribe((token: Array<Object>) => this.token = JSON.stringify(token["token"]));
  }

  getAvatar(avatarID){
    let suffix = "";
    suffix = (avatarID !== "All" ? ("/"+avatarID) : suffix);
    return this.getJsonFromApi(API_DATA.avatars+suffix);
  }

  getStudent(){
    return this.getJsonFromApi(API_DATA.student);
  }

  getChapterIllustrations(chapterID){
    let suffix = "";
    suffix = (chapterID !== "All" ? (":"+chapterID) : suffix);
    return this.getJsonFromApi(API_DATA.illustrations+suffix);
  }

  getCompetences(checked,chapterID){
      let suffix = "";
      suffix = (checked !== "All" ? ("?checked='"+checked+"'") : suffix);
      suffix = (chapterID !== "All" ?
        (suffix !== "" ? suffix+"&chapterId='"+chapterID+"'" : "?chapterId='"+chapterID+"'"): suffix);

      return this.getJsonFromApi(API_DATA.competences+suffix);
  }

  getChapter(info){
    let suffix = "";
    suffix = (info !== "About" ? ("/"+info) : suffix);
    return this.getJsonFromApi(API_DATA.chapters+suffix);
  }

  getEdPlan(info){
    let suffix = "";
    suffix = (info !== "About" ? ("/"+info) : suffix);
    return this.getJsonFromApi(API_DATA.edPlan+suffix);
  }

}
