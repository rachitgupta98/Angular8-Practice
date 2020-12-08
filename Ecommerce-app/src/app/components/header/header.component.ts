import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService:UserService,public router:Router) {
  
   }

  ngOnInit() {
  }
  getLogout(){
    this.userService.user.isValid = false;
    this.userService.user.name = "";
    this.router.navigate(["login"]);
  }
}
