import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiCommunicatorService {
  private server = 'http://46.101.204.215:1337/api/V1'
  private studentCompetences = '/studentcompetence';
  private chapterIllustrations ="/chapterillustrations/";
  private token= "";


  constructor(private http: Http) {}

  private getJsonFromApi(url){

    var authHeader = new Headers();
    authHeader.append('Authorization', 'Bearer jfjztjtzj');

    return this.http.get(this.server+url, {headers: authHeader})
                    .map((res: Response) =>  res.json());
  }

  private put(url, body){
    let test= this.http.put(this.server+url, body).map((res:Response)=> res.json());
    return test;
  }

  studentLogin(){
    let credentials= JSON.stringify({ "username": "username", "password": "password" });
    let myToken = this.put("/login", credentials);
  }

  getCompetences(checked,chapterID){
      var postfix = "";
      postfix = (checked === true || checked === false ?
        ("?checked='"+checked+"'") : postfix);
      postfix = (chapterID !== "All" ?
        (postfix !== "" ? postfix+"&chapterId='"+chapterID+"'" : "?chapterId='"+chapterID+"'"): postfix);
      console.log("log: "+postfix);
      return this.getJsonFromApi(this.studentCompetences+postfix);
  }



}
