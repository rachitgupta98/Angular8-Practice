import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textIn:string="rachit";
  getEnter(){
    console.log(this.textIn)
  }
}
