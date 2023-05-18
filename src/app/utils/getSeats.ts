import Seat from '../types/Seat';

const getSeats = (): Seat[] => {
  const singleSeat: Seat = {
    available: true,
  };

  return new Array(80).fill(singleSeat);
};

export default getSeats;
