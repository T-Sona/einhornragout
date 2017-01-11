import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiCommunicatorService } from '../../api-communicator.service';

@Component({
  selector: 'app-home-body',
  templateUrl: 'home-body.component.html',
  styleUrls: ['home-body.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ApiCommunicatorService]
})
export class HomeBodyComponent implements OnInit {


  constructor(private apiCommunicatorService: ApiCommunicatorService) {
  }

  ngOnInit() {
  }

  private login(){
    let credentials= { "username": "farin", "password": "MKD" };
    this.apiCommunicatorService.put("/login", credentials).subscribe((token: Array<Object>) => localStorage.setItem("token", JSON.stringify(token)));
  }

  showDialog = false;

}
