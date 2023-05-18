import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SeatsComponent } from './components/seats/seats.component';
import { SingleSeatComponent } from './components/single-seat/single-seat.component';
import { NumberSeatsComponent } from './components/number-seats/number-seats.component';
import { StoreModule } from '@ngrx/store';
import { seatsReducer } from './ngrx/seats.reducer';

@NgModule({
  declarations: [
    AppComponent,
    SeatsComponent,
    SingleSeatComponent,
    NumberSeatsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ seats: seatsReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
