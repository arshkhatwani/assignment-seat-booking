import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { seatStatusChange } from 'src/app/ngrx/seats.actions';
import Seat from 'src/app/types/Seat';

@Component({
  selector: 'app-single-seat',
  templateUrl: './single-seat.component.html',
  styleUrls: ['./single-seat.component.css'],
})
export class SingleSeatComponent {
  @Input() seat: Seat = { available: true, id: 'test' };

  constructor(private store: Store<{ seats: Seat[] }>) {}

  fillSeat() {
    this.store.dispatch(seatStatusChange({ seatToChange: this.seat }));
  }
}
