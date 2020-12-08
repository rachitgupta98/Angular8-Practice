import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent implements OnInit {

  users: any = [];
  constructor() { }

  ngOnInit() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res=>res.json())
      .then((data) => {
        this.users = data;
        console.log(this.users);
      })
      .catch(function (err) { console.log(err); })
  }
}
