import {Component, OnInit} from '@angular/core';
import {ApiCommunicatorService} from "../../api-communicator.service";
import {BodyDynamicsService} from "../../body-dynamics.service";
import {Router} from '@angular/router';
import {LoginService} from '../../login.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerdaten = {};

  constructor(private apiCommunicatorService: ApiCommunicatorService, private bodyDynamics: BodyDynamicsService, private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {

    this.getStudentData();

  }

  getStudentData() {
    this.apiCommunicatorService.getStudent().subscribe(res => {this.headerdaten=res; console.log("Res"+JSON.stringify(res))});
    console.log("Testdaten:"+JSON.stringify(this.headerdaten));
  }

  loadChapter(i){
    this.apiCommunicatorService.getChapter(i).subscribe((res: Array<Object>) => this.bodyDynamics.changeBackground(res["weakcolor"]));
    this.bodyDynamics.changeFlag(i);
    this.bodyDynamics.changeButtonUp(i);
    this.bodyDynamics.changeButtonDown(i);
  }


  logout(){
    console.log("header");
    this.loginService.logout();
    this.router.navigate(["../home"]);
  }

}
