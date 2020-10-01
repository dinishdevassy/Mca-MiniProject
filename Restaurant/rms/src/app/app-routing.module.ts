import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {RestownerComponent} from './restowner/restowner.component'
import {HomeComponent} from './home/home.component'
import {AdminapprovalComponent} from './adminapproval/adminapproval.component'
import {SignupComponent} from './signup/signup.component'
import {AdminremoverestComponent} from './adminremoverest/adminremoverest.component'
import {RestaddrestaurantComponent} from './restaddrestaurant/restaddrestaurant.component'

const routes: Routes = [
  { path:"",component:HomeComponent},
  { path:"newowner",component:RestownerComponent},
  { path:"approval",component:AdminapprovalComponent},
  { path:"newuser",component:SignupComponent},
  { path:"removerest",component:AdminremoverestComponent},
  { path:"addrest",component:RestaddrestaurantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
