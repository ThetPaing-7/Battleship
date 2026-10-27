export default class Random_Generate {
  constructor() {}

  static getTwoPoints() {
    return {
      x: this.getRandomInteger(0, 10),
      y: this.getRandomInteger(0, 10),
    };
  }

  static getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
