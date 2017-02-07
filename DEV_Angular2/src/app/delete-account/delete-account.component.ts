import { Component, OnInit } from '@angular/core';
import {ApiCommunicatorService} from "../api-communicator.service";

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  constructor(private apiCommunicator: ApiCommunicatorService) { }

  ngOnInit() {
  }

  public showSuc = false;
  public closable = true;

  close() {
    this.showSuc = false;
  }

  public openModalSuc () {
    this.apiCommunicator.deleteStudent();
    this.showSuc = true;
  }

}
