import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.scss']
})
export class ChildCompComponent {
  title="No";
  optionsData:any[]=["MI","CSK","RCB"];
  constructor() { }

  ngOnInit() {
  }
  changeTitle(value){
    console.log(value);
    this.title=value;
  }
}
