import { v4 as uuidv4 } from 'uuid';

export default class Seat {
  available: boolean;
  id: string;

  constructor(available: boolean) {
    this.available = available;
    this.id = uuidv4();
  }
}
