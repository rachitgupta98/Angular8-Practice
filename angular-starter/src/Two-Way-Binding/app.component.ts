import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="abc";
  // @ViewChild("box",null) child:ElementRef;
  getEnter(){
    console.log(this.title);
  }  
  getMouse(){
    console.log(this.title);
  }
}
