import { Component } from '@angular/core';
import Seat from './types/Seat';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment-seat-booking';
  seats: Seat[] = [];
  seatsToAdd: number = 0;

  constructor(private store: Store<{ seats: Seat[] }>) {
    this.store.pipe(select('seats')).subscribe((seats) => {
      this.seats = seats;
    });
  }
}
