import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {
  seatStatusChange,
  seatStatusChangeMultiple,
} from 'src/app/ngrx/seats.actions';
import Seat from 'src/app/types/Seat';

@Component({
  selector: 'app-single-seat',
  templateUrl: './single-seat.component.html',
  styleUrls: ['./single-seat.component.css'],
})
export class SingleSeatComponent {
  @Input() seat: Seat = { available: true, id: 'test' };
  seatsToFill: number = 0;

  constructor(private store: Store<{ seats: Seat[]; seatsToFill: number }>) {
    this.store.pipe(select('seatsToFill')).subscribe((seatsToFill) => {
      this.seatsToFill = seatsToFill;
    });
  }

  fillSeat() {
    this.store.dispatch(
      seatStatusChangeMultiple({
        numberOfSeats: this.seatsToFill,
        seatToChange: this.seat,
      })
    );
  }
}
