import { ChildCompComponent } from './components/child-comp/child-comp.component';
import { Component, Input, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ChildCompComponent,null) vv:ChildCompComponent;
  winner;
  constructor(private render:Renderer2){
    
  }
  ngDoCheck(){
    this.winner=this.vv.title;
  }
}
