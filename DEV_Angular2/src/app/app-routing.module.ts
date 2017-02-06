import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from "./main/main.component";
import {DeleteAccountComponent} from "./delete-account/delete-account.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {ChangePictureComponent} from "./change-picture/change-picture.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Login' }},
  { path: 'main', component: MainComponent, data: { title: 'Main' }},
  { path: 'deleteaccount', component: DeleteAccountComponent },
  { path: 'changepassword', component: ChangePasswordComponent },
  { path: 'changepicture', component: ChangePictureComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
