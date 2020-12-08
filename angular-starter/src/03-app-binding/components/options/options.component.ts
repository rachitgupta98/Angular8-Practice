import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  
  constructor() { }
  @Input()
  data;

  @Output()
  decider:EventEmitter <any> = new EventEmitter();
  ngOnInit() {
  }
  setDecider(value){
    this.decider.next(value);
  }
}
