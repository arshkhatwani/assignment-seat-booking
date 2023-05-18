import Seat from '../types/Seat';

const getSeats = (): Seat[] => {
  let seats: Seat[] = [];
  for (let i = 0; i < 80; i++) {
    seats.push(new Seat(true));
  }
  return seats;
};

export default getSeats;
