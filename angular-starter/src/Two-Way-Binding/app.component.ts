import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textIn:string="rahit";
  getEnter(){
    console.log(this.textIn)
  }
}
