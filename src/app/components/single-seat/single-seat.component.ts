import { Component, Input, Output, EventEmitter } from '@angular/core';
import Seat from 'src/app/types/Seat';

@Component({
  selector: 'app-single-seat',
  templateUrl: './single-seat.component.html',
  styleUrls: ['./single-seat.component.css'],
})
export class SingleSeatComponent {
  @Input() seat: Seat = { available: true, id: 'test' };
  @Input() seats: Seat[] = [];
  @Input() seatStatusChange: Function = () => {};

  fillSeat() {
    this.seatStatusChange(this.seat);
  }
}
