import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NamesListComponent } from './namesList.component';
import { NameComponent } from './name.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NamesListComponent, NameComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
