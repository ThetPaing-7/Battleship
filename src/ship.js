export default class Ship {
  constructor(length) {
    this.length = length;
    this.hit_times = 0;
  }

  hit() {
    this.hit_times++;
  }

  isSunk() {
    return this.hit_times >= this.length;
  }
}
