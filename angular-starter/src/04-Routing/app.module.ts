import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { AjaxComponent } from './Components/ajax/ajax.component';
const routes:Routes=[
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  // {path: "**", redirectTo: "home"},
  {path:"ajax",component:AjaxComponent},
]

const routing = RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AjaxComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
