import { Component, OnInit } from '@angular/core';
import { ApiCommunicatorService } from '../api-communicator.service';

@Component({
  selector: 'app-change-picture',
  templateUrl: './change-picture.component.html',
  styleUrls: ['./change-picture.component.css'],
  providers: [ApiCommunicatorService]
})
export class ChangePictureComponent implements OnInit {

  public avatarPictures = [];

  constructor(private apiCommunicatorService: ApiCommunicatorService) {
  }

  ngOnInit() {
    this.apiCommunicatorService.getAvatars();
    this.getAvatars();
  }

  private getAvatars(){
    this.apiCommunicatorService.getAvatars()
      .subscribe((avatar: Array<Object>) => this.avatarPictures = avatar);
  }
}
