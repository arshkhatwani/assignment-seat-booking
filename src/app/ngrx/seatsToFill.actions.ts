import { createAction, props } from '@ngrx/store';
import Seat from '../types/Seat';

export const setSeatsToFill = createAction(
  'Set value of seatsToFill',
  props<{ val: number }>()
);
