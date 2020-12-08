import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  visible=false;
  title="";
  optionsData:any[]=[
    {"name":"MI"},
    {"name":"CSK"},
    {"name":"RCB"},
    {"name":"KKR"},
  ];
  setTitle(value){
    this.title = value;
  }
}
