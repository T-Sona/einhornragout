import { Component, OnInit } from '@angular/core';
import { ApiCommunicatorService } from '../../api-communicator.service';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css']
})
export class BodyComponent implements OnInit {
  public siteContent= [];

  constructor() {
  }

  ngOnInit() {
    this.siteContent = ApiCommunicatorService.getCompetences();
    console.log("testing Timo");
  }

}
