import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count:number=34;
  name:string="Default"
  increment(){
    this.count++;
  }
  decrement(){
    this.count--
  }
  getInput(name:string){
    this.name=name;
  }
  showMouseE(){
    console.log("Mouse ENter");
  }
  showMouseL(){
    console.log("Mouse Leave")
  }
}
