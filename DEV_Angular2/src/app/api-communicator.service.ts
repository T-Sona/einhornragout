import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiCommunicatorService {
  private testUrl = 'http://46.101.204.215:1337/api/V1/studentcompetence';

  constructor(private http: Http) {}

  getCompApi(){
      var authHeader = new Headers();
      authHeader.append('Authorization', 'Bearer jfjztjtzj');

      console.log(authHeader);

      return this.http.get(this.testUrl, {
      headers: authHeader
    }).map((res: Response) =>  res.json());
  };



  static getCompetences(){
  return [{
    "id": 0,
    "chapterId": 1,
    "teacherText": "Ullamco anim tempor aute in fugiat laboris fugiat.",
    "studentText": "Deserunt officia aliquip aliqua minim proident consectetur in esse ipsum.",
    "description": "Dolor aute ad voluptate qui qui dolore laboris officia.",
    "checked": false,
    "educationplanId": 1
  },
  {
    "id": 6,
    "chapterId": 1,
    "teacherText": "Proident non irure est proident non.",
    "studentText": "Aute laborum cillum ea in ullamco est et reprehenderit cillum consequat.",
    "description": "Excepteur do amet adipisicing duis et ut elit ipsum.",
    "checked": false,
    "educationplanId": 8
  },
  {
    "id": 27,
    "chapterId": 1,
    "teacherText": "Officia veniam quis sit dolor ipsum cillum non in commodo aliqua.",
    "studentText": "Minim sunt exercitation incididunt proident reprehenderit ad excepteur ut eiusmod ea occaecat officia.",
    "description": "Est quis fugiat qui id aute veniam laborum.",
    "checked": true,
    "educationplanId": 10
  },
  {
    "id": 30,
    "chapterId": 1,
    "teacherText": "Reprehenderit adipisicing eiusmod aliquip proident voluptate culpa id ea duis proident cillum ullamco adipisicing.",
    "studentText": "Culpa sint proident magna amet.",
    "description": "Do non ad labore elit exercitation consectetur pariatur et fugiat.",
    "checked": false,
    "educationplanId": 7
  },
  {
    "id": 53,
    "chapterId": 1,
    "teacherText": "Ipsum ut ex amet officia cupidatat nisi labore.",
    "studentText": "Officia velit reprehenderit cupidatat amet consequat tempor deserunt consequat.",
    "description": "Id sint magna do duis commodo non.",
    "checked": false,
    "educationplanId": 11
  },
  {
    "id": 64,
    "chapterId": 1,
    "teacherText": "Nulla incididunt exercitation cillum deserunt nulla qui exercitation occaecat.",
    "studentText": "Irure pariatur reprehenderit ea ipsum ex sit mollit nulla incididunt velit nulla anim qui exercitation.",
    "description": "Do culpa adipisicing aliquip eiusmod reprehenderit esse ullamco occaecat aliquip incididunt.",
    "checked": false,
    "educationplanId": 6
  },
  {
    "id": 72,
    "chapterId": 1,
    "teacherText": "Aliquip mollit veniam in elit cillum.",
    "studentText": "Aliqua sit amet Lorem in reprehenderit est amet consequat non laboris tempor aliqua.",
    "description": "Elit do adipisicing culpa ullamco commodo consectetur ullamco commodo ea exercitation.",
    "checked": true,
    "educationplanId": 2
  },
  {
    "id": 97,
    "chapterId": 1,
    "teacherText": "Magna et veniam quis tempor elit sint consequat cillum mollit laborum occaecat nisi.",
    "studentText": "Et aliqua et amet elit deserunt cupidatat in.",
    "description": "Nulla amet nisi mollit labore est nisi esse labore qui.",
    "checked": false,
    "educationplanId": 2
  },
  {
    "id": 107,
    "chapterId": 1,
    "teacherText": "Esse est adipisicing commodo nostrud cupidatat eu velit mollit ullamco excepteur reprehenderit labore ea reprehenderit.",
    "studentText": "Laborum dolor nostrud laboris adipisicing.",
    "description": "Nisi occaecat consectetur eiusmod incididunt cupidatat pariatur ut in deserunt.",
    "checked": false,
    "educationplanId": 4
  },
  {
    "id": 111,
    "chapterId": 1,
    "teacherText": "Fugiat eu sint voluptate ex non cupidatat quis ipsum exercitation.",
    "studentText": "Id ea velit cupidatat labore qui cupidatat enim consequat laboris ea aliqua ipsum eiusmod laborum.",
    "description": "Cillum labore enim occaecat nulla aliqua aliquip pariatur proident non.",
    "checked": true,
    "educationplanId": 9
  },
  {
    "id": 121,
    "chapterId": 1,
    "teacherText": "Irure occaecat commodo non commodo.",
    "studentText": "Ullamco occaecat laboris cupidatat Lorem velit ad.",
    "description": "Exercitation ea excepteur amet adipisicing anim.",
    "checked": false,
    "educationplanId": 9
  },
  {
    "id": 128,
    "chapterId": 1,
    "teacherText": "Quis minim quis duis et nostrud id ex.",
    "studentText": "Et nostrud eu non ipsum fugiat nisi.",
    "description": "Officia minim nulla duis enim.",
    "checked": true,
    "educationplanId": 6
  },
  {
    "id": 131,
    "chapterId": 1,
    "teacherText": "Dolor ut aliqua consequat ex culpa nostrud veniam consequat enim duis ad.",
    "studentText": "Esse est minim est fugiat officia.",
    "description": "Sunt labore consequat adipisicing esse cupidatat cillum ipsum proident.",
    "checked": false,
    "educationplanId": 9
  },
  {
    "id": 132,
    "chapterId": 1,
    "teacherText": "Incididunt Lorem dolore exercitation amet ullamco et ullamco.",
    "studentText": "Commodo anim culpa Lorem dolore minim do minim qui aliquip ex.",
    "description": "Ipsum pariatur reprehenderit eiusmod proident aute esse exercitation do do.",
    "checked": true,
    "educationplanId": 10
  },
  {
    "id": 135,
    "chapterId": 1,
    "teacherText": "Incididunt ullamco aliqua aliqua cupidatat incididunt aliquip est nulla reprehenderit.",
    "studentText": "Voluptate culpa proident minim do et esse ut ad.",
    "description": "Duis magna pariatur esse in amet reprehenderit non laboris adipisicing elit velit mollit duis duis.",
    "checked": false,
    "educationplanId": 8
  },
  {
    "id": 162,
    "chapterId": 1,
    "teacherText": "Sunt consequat in velit sint anim incididunt laborum officia sit.",
    "studentText": "Nulla id consequat veniam dolor voluptate elit laborum eiusmod nostrud minim sint non enim.",
    "description": "Nisi dolor ex ut veniam id duis fugiat velit tempor.",
    "checked": true,
    "educationplanId": 9
  },
  {
    "id": 192,
    "chapterId": 1,
    "teacherText": "Sunt ullamco in irure duis consectetur excepteur Lorem officia do.",
    "studentText": "Tempor voluptate consectetur nisi pariatur sunt aliqua sunt veniam qui qui nisi.",
    "description": "Id amet ullamco veniam adipisicing reprehenderit anim dolor.",
    "checked": false,
    "educationplanId": 1
  },
  {
    "id": 217,
    "chapterId": 1,
    "teacherText": "Consectetur esse Lorem nostrud nisi dolore aute pariatur minim Lorem pariatur id proident laboris.",
    "studentText": "Do id tempor reprehenderit aliquip ea labore voluptate cillum.",
    "description": "Minim officia aliquip tempor pariatur aliquip cupidatat aliqua voluptate adipisicing officia duis sunt officia.",
    "checked": false,
    "educationplanId": 11
  },
  {
    "id": 239,
    "chapterId": 1,
    "teacherText": "Ullamco adipisicing laboris commodo laborum cillum tempor ut voluptate exercitation in Lorem nisi ex.",
    "studentText": "Commodo laborum nulla anim aliquip esse.",
    "description": "Aliqua aute elit adipisicing ex culpa Lorem.",
    "checked": true,
    "educationplanId": 9
  },
  {
    "id": 283,
    "chapterId": 1,
    "teacherText": "Exercitation ea laborum nostrud voluptate laborum elit commodo nisi ipsum magna reprehenderit eu labore dolore.",
    "studentText": "Cillum qui deserunt dolore commodo duis voluptate est exercitation incididunt aute tempor et velit.",
    "description": "Voluptate ad cillum dolore id exercitation Lorem aute Lorem esse consectetur laboris nisi.",
    "checked": true,
    "educationplanId": 9
  },
  {
    "id": 334,
    "chapterId": 1,
    "teacherText": "Anim qui ea commodo laborum labore consectetur elit.",
    "studentText": "Consectetur excepteur et ullamco culpa laboris adipisicing do non incididunt nulla consequat et.",
    "description": "Ad anim Lorem minim ut culpa elit ex duis.",
    "checked": false,
    "educationplanId": 2
  },
  {
    "id": 343,
    "chapterId": 1,
    "teacherText": "Ea laborum fugiat ex aute deserunt proident ex consequat cillum.",
    "studentText": "Pariatur ut veniam ex duis qui non ex anim consectetur quis velit.",
    "description": "Amet incididunt enim nulla pariatur laboris voluptate ut reprehenderit esse nostrud pariatur.",
    "checked": true,
    "educationplanId": 5
  },
  {
    "id": 412,
    "chapterId": 1,
    "teacherText": "Mollit id culpa id velit.",
    "studentText": "Pariatur consectetur nostrud et ea ad.",
    "description": "Sit et ad Lorem voluptate ullamco consequat aliquip culpa eiusmod duis laborum consequat ipsum ullamco.",
    "checked": false,
    "educationplanId": 1
  },
  {
    "id": 418,
    "chapterId": 1,
    "teacherText": "Dolore velit fugiat ipsum quis cillum duis occaecat ut id occaecat id deserunt quis in.",
    "studentText": "Culpa ullamco cupidatat culpa irure nostrud mollit adipisicing officia.",
    "description": "Ullamco incididunt cupidatat esse cupidatat officia sint excepteur laborum.",
    "checked": true,
    "educationplanId": 6
  },
  {
    "id": 429,
    "chapterId": 1,
    "teacherText": "Aute duis qui cupidatat non ipsum Lorem est do sint.",
    "studentText": "Ea commodo pariatur consectetur dolore pariatur.",
    "description": "Adipisicing ipsum voluptate sunt consequat consequat quis adipisicing velit excepteur voluptate laborum reprehenderit culpa.",
    "checked": true,
    "educationplanId": 9
  },
  {
    "id": 434,
    "chapterId": 1,
    "teacherText": "Aliqua et consequat eiusmod incididunt tempor aute ea.",
    "studentText": "Mollit est ipsum in nisi duis do in labore commodo ullamco.",
    "description": "Ipsum consequat anim cillum officia ipsum ullamco ullamco.",
    "checked": true,
    "educationplanId": 6
  },
  {
    "id": 439,
    "chapterId": 1,
    "teacherText": "Dolor cupidatat qui ullamco irure.",
    "studentText": "Proident non ea dolore amet proident veniam excepteur proident.",
    "description": "Pariatur pariatur ipsum consectetur amet consequat laboris Lorem consequat ut in.",
    "checked": true,
    "educationplanId": 3
  },
  {
    "id": 470,
    "chapterId": 1,
    "teacherText": "Minim officia minim occaecat aliqua ipsum aliqua ea occaecat incididunt duis dolore esse sit.",
    "studentText": "Enim ex nostrud sit incididunt excepteur magna deserunt amet ad adipisicing exercitation minim esse.",
    "description": "Laborum non mollit irure ipsum.",
    "checked": false,
    "educationplanId": 11
  }
];
  }
}
