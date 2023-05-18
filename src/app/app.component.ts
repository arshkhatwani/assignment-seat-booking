import { Component } from '@angular/core';
import Seat from './types/Seat';
import getSeats from './utils/getSeats';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment-seat-booking';
  seats: Seat[] = getSeats();
  seatsToAdd: number = 0;

  seatStatusChange(seat: Seat) {
    // console.log(seat);
    // console.log(this.seats);
    console.log(this.seatsToAdd);
    const idx = this.seats.indexOf(seat);
    this.seats[idx].available = !this.seats[idx].available;
  }
}
