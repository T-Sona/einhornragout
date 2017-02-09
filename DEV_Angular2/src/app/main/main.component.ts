import { Component, OnInit } from '@angular/core';
import {BodyDynamicsService} from "../body-dynamics.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private bodyDynamics: BodyDynamicsService) { }

  ngOnInit() {
  }

}
