import {Component, OnInit} from '@angular/core';
import {ApiCommunicatorService} from '../api-communicator.service';

@Component({
  selector: 'app-change-picture',
  templateUrl: './change-picture.component.html',
  styleUrls: ['./change-picture.component.css'],
  providers: [ApiCommunicatorService]
})
export class ChangePictureComponent implements OnInit {

  public avatarPictures = [];
  public pictureCurrentUrl = this.avatarPictures[this.currentPicture];
  public currentPicture = sessionStorage.getItem("avatarId");
  public picTopOld = true;
  public picTopNew = false;
  public pictureID;
  public index;

  constructor(private apiCommunicatorService: ApiCommunicatorService) {
  }

  ngOnInit() {
    this.getAvatars();
  }

  private getAvatars() {
    this.apiCommunicatorService.getAvatar("All")
      .subscribe((avatar: Array<Object>) => this.avatarPictures = avatar);
  }

  changePictureCurrent(url, index) {
    this.picTopOld = false;
    this.picTopNew = true;
    this.pictureCurrentUrl = url;
    this.pictureID = index;
    console.log("PictureID: "+index);
  }

  public showSuc = false;
  public closable = true;

  close() {
    this.showSuc = false;
  }

  public openModalSuc() {
    this.apiCommunicatorService.putProfilePicture(this.pictureID);
    sessionStorage.setItem("avatarId", this.pictureID);
    this.showSuc = true;
  }

}
