import { Component, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { setSeatsToFill } from 'src/app/ngrx/seatsToFill.actions';

@Component({
  selector: 'app-number-seats',
  templateUrl: './number-seats.component.html',
  styleUrls: ['./number-seats.component.css'],
})
export class NumberSeatsComponent {
  seatsInputVal: number = 0;
  seatsToFill: number = 0;

  constructor(private store: Store<{ seatsToFill: number }>) {
    this.store.pipe(select('seatsToFill')).subscribe((seatsToFill) => {
      this.seatsToFill = seatsToFill;
    });
  }

  lockSeats() {
    this.store.dispatch(setSeatsToFill({ val: this.seatsInputVal }));
    // console.log(this.seatsToFill);
  }
}
