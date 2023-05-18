import { createReducer, on } from '@ngrx/store';
import Seat from '../types/Seat';
import getSeats from '../utils/getSeats';
import { seatStatusChange, seatStatusChangeMultiple } from './seats.actions';

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
  }),
  on(seatStatusChangeMultiple, (state, action) => {
    const total = action.numberOfSeats;
    const seatToChange = action.seatToChange;

    const idx = state.indexOf(seatToChange);
    let seatsLeft = total;

    let newSeats: Seat[] = getSeats();
    newSeats = newSeats.map((item, index) => {
      if (index >= idx && seatsLeft > 0 && item.available === true) {
        seatsLeft--;
        return { id: item.id, available: false };
      }
      return item;
    });

    return newSeats;
  })
);
