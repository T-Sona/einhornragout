import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { FooterComponent } from './main/footer/footer.component';
import { BodyComponent } from './main/body/body.component';
import { HomeBodyComponent } from './home/home-body/home-body.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangePictureComponent } from './change-picture/change-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeBodyComponent,
    HomeFooterComponent,
    DeleteAccountComponent,
    ChangePasswordComponent,
    ChangePictureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
