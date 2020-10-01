import { Component, OnInit, inject, Inject } from '@angular/core';
// import {SESSION_STORAGE,WebStorageService} from 'angular-webstorage-service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @Inject(SESSION_STORAGE) private ws:WebStorageService
  constructor() { }

  ngOnInit(): void {
  }
  key="role";
  
  value;
  public data:any=[];
  login(){
   // this.ws.set(this.key,this.value)
  }
}
