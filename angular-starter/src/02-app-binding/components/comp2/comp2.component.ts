import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {
  @Input()
  fromParent;
  constructor() { }
  @Output()
  changeEvent:EventEmitter <any> = new EventEmitter();
  ngOnInit() {
  }
  setValue2(value){
    this.changeEvent.next(value);
  }
}
