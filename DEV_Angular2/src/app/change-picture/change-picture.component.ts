import {Component, OnInit} from '@angular/core';
import {ApiCommunicatorService} from '../api-communicator.service';
import { ErrorService } from '../error.service';

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

  constructor(private apiCommunicatorService: ApiCommunicatorService, private errorService: ErrorService) {
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
  }

  public changePicture() {
    this.apiCommunicatorService.putProfilePicture(this.pictureID).subscribe((res: any) => {
            this.errorService.throwSuccess("Profilbild erfolgreich geändert!");
            if(!!sessionStorage.getItem("avatarId")){
                sessionStorage.setItem("avatarId", this.pictureID);
            } else {
              localStorage.setItem("avatarId", this.pictureID);
            }
            }, (err) => this.errorService.throwError("Fehler beim ändern des Profilbilds, bitte versuchen Sie es später erneut!"));
  }

}
