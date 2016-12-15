import { Component, OnInit } from '@angular/core';
import { ApiCommunicatorService } from '../../api-communicator.service';
import {Http, Headers} from '@angular/http';

@Component({
  selector: 'app-body',
  templateUrl: 'body.component.html',
  styleUrls: ['body.component.css'],
  providers: [ApiCommunicatorService]
})
export class BodyComponent implements OnInit {
  public siteContent= [];

  constructor(private apiCommunicatorService: ApiCommunicatorService) {
  }

  ngOnInit() {
    this.apiCommunicatorService.getCompetences(false,1).subscribe((comp: Array<Object>) => this.siteContent = comp);
    console.log("Login:");
    this.apiCommunicatorService.studentLogin();
  }

}
