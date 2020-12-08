import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../service/user.service';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(public router:Router, public userService:UserService){
    console.log("Gurad is working");
  }
  canActivate():boolean{
    if(this.userService.user.isValid){
      return this.userService.user.isValid;
    }
    else{
      alert("Login required!!")
      this.router.navigate(["login"])
    }
  }
  
}
