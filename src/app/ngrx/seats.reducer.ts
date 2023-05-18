import { createReducer, on } from '@ngrx/store';
import Seat from '../types/Seat';
import getSeats from '../utils/getSeats';
import { seatStatusChange } from './seats.actions';

export const initialState: Seat[] = getSeats();

export const seatsReducer = createReducer(
  initialState,
  on(seatStatusChange, (state, action) => {
    const seat = action.seatToChange;
    let newSeats = state.map((item) => {
      if (item.id === seat.id) {
        return { id: seat.id, available: !seat.available };
      }
      return item;
    });
    return newSeats;
  })
);
