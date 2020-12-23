import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OptionsComponent } from './components/options/options.component';
import { FormsModule } from '@angular/forms';
import { BazDirective } from 'src/directives/baz/baz.directive';

@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    BazDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
