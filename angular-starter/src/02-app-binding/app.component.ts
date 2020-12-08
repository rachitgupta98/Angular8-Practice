import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  val:string="SomeText"
  setValue(newVal:string){
    this.val = newVal;
  }
}
