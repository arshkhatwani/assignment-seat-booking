import { createReducer, on } from '@ngrx/store';
import { seatStatusChange } from './seats.actions';
import { setSeatsToFill } from './seatsToFill.actions';

export const initialState: number = 0;

export const seatsToFillReducer = createReducer(
  initialState,
  on(setSeatsToFill, (state, action) => {
    const val = action.val;
    return val;
  })
);
