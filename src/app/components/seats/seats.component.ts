import { Component, Input } from '@angular/core';
import Seat from 'src/app/types/Seat';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css'],
})
export class SeatsComponent {
  @Input() seats: Seat[] = [];
  @Input() seatStatusChange: Function = () => {};

  constructor() {}
}
