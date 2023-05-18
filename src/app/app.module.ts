import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeatsComponent } from './components/seats/seats.component';
import { SingleSeatComponent } from './components/single-seat/single-seat.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatsComponent,
    SingleSeatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
