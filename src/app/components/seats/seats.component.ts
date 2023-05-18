import { Component, Input } from '@angular/core';
import Seat from 'src/app/types/Seat';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css'],
})
export class SeatsComponent {
  seats: Seat[] = [];

  constructor(private store: Store<{ seats: Seat[] }>) {
    this.store.pipe(select('seats')).subscribe((seats) => {
      this.seats = seats;
    });
  }
}
