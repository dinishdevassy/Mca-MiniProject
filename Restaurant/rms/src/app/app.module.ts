import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
// import {StorageServiceModule} from 'angular-webstorage-service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestownerComponent } from './restowner/restowner.component'
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { RestheaderComponent } from './restheader/restheader.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { HomeComponent } from './home/home.component';
import { AdminapprovalComponent } from './adminapproval/adminapproval.component';
import { SignupComponent } from './signup/signup.component';
import { AdminremoverestComponent } from './adminremoverest/adminremoverest.component';
import { RestaddrestaurantComponent } from './restaddrestaurant/restaddrestaurant.component';



@NgModule({
  declarations: [
    AppComponent,
    RestownerComponent,
    AdminheaderComponent,
    RestheaderComponent,
    UserheaderComponent,
    HomeComponent,
    AdminapprovalComponent,
    SignupComponent,
    AdminremoverestComponent,
    RestaddrestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // StorageServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
