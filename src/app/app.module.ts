import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import {FormsModule} from '@angular/forms';
import { ListdemoComponent } from './listdemo/listdemo.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ListdemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
