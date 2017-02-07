import {Component, OnInit} from '@angular/core';
import {ApiCommunicatorService} from "../../api-communicator.service";
import {BodyDynamicsService} from "../../body-dynamics.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerdaten = {};

  constructor(private apiCommunicatorService: ApiCommunicatorService, private bodyDynamics: BodyDynamicsService) {
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
  }

}
