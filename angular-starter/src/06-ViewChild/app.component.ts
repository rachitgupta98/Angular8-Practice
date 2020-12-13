import { ChildCompComponent } from './components/child-comp/child-comp.component';
import { Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(ChildCompComponent,null) vv:ChildCompComponent;
  winner;
  ngDoCheck(){
    this.winner=this.vv.title;
  }
}
