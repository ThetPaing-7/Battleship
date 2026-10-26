export default class Random_Generate {
  constructor() {}

  static getTwoPoints() {
    let temp = new Random_Generate();
    return {
      x: temp.getRandomInteger(0, 10),
      y: temp.getRandomInteger(0, 10),
    };
  }

  getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
