import { createAction, props } from '@ngrx/store';
import Seat from '../types/Seat';

export const seatStatusChange = createAction(
  '[Seats Component] Status Change',
  props<{ seatToChange: Seat }>()
);

export const seatStatusChangeMultiple = createAction(
  '[Seats Component] Status Change Multiple',
  props<{ seatToChange: Seat; numberOfSeats: number }>()
);
