import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-seats',
  templateUrl: './number-seats.component.html',
  styleUrls: ['./number-seats.component.css'],
})
export class NumberSeatsComponent {
  @Input() seatsToAdd: number = 0;
}
