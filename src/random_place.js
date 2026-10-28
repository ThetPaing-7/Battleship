import Random_Generate from "./random_generate.js";

export default class Random_place {
  static total_grids = 10;

  constructor() {}

  // Get valid starting coordinates and a random direction
  static createPoint(ship) {
    const directions = ["horizontal", "vertical"];

    const direction = directions[Math.floor(Math.random() * directions.length)];

    const maxStart = this.total_grids - ship.length;

    let x_coordinates;
    let y_coordinates;

    if (direction === "horizontal") {
      // Your horizontal placement increments vertical (y)
      x_coordinates = Random_Generate.getRandomInteger(0, this.total_grids - 1);

      y_coordinates = Random_Generate.getRandomInteger(0, maxStart);
    } else {
      // Your vertical placement increments horizontal (x)
      x_coordinates = Random_Generate.getRandomInteger(0, maxStart);

      y_coordinates = Random_Generate.getRandomInteger(0, this.total_grids - 1);
    }

    const coordinates = [x_coordinates, y_coordinates];

    return [coordinates, direction];
  }

  // Find a valid position and place the ship
  static placeShip(ship, board) {
    let [coordinates, direction] = this.createPoint(ship);

    let attempts = 0;
    const maxAttempts = 1000;

    while (!this.isValidPlaces(ship, coordinates, direction, board)) {
      if (attempts >= maxAttempts) {
        console.error("Could not find a valid position for the ship.");
        return false;
      }

      [coordinates, direction] = this.createPoint(ship);
      attempts++;
    }

    board.place(ship, coordinates, direction);

    return true;
  }

  // Check whether all ship cells are valid and empty
  static isValidPlaces(ship, coordinates, direction, board) {
    const grids = board.get();

    let [horizontal, vertical] = coordinates;

    for (let i = 0; i < ship.length; i++) {
      // Check grid boundaries
      if (
        horizontal < 0 ||
        horizontal >= this.total_grids ||
        vertical < 0 ||
        vertical >= this.total_grids
      ) {
        return false;
      }

      // Check whether the current cell is occupied
      if (
        typeof grids[horizontal][vertical] === "object" &&
        grids[horizontal][vertical] !== "empty"
      ) {
        return false;
      }
      // Move to the next cell according to direction
      if (direction === "horizontal") {
        vertical++;
      } else {
        horizontal++;
      }
    }

    return true;
  }
}
