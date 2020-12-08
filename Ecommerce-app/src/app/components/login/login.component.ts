import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(public userService:UserService, public router:Router) { 
    this.loginForm = new FormGroup({
      "username":new FormControl("Rachit", [Validators.required, Validators.pattern("[a-zA-Z_]+")]),
      "password":new FormControl("", [Validators.required])
    });
    
  }
  ngOnInit() {
  }
  checkLoginUser(){
    this.userService.user.isValid = true;
    this.userService.user.name=this.loginForm.value.username;
    console.log(this.loginForm.value.username);
    if(this.userService.user.isValid){
      this.router.navigate(["home"]);
    }
  }
}
