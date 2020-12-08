import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  admin:string="";
  constructor(public userService:UserService) {
    this.admin = this.userService.user.name;
   }

  ngOnInit() {
  }

}
