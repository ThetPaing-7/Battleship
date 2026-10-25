import Ship from "./ship.js";
export default class Gameboard {
  constructor() {
    this.board = [];
  }

  create() {
    for (let i = 0; i < 10; i++) {
      let tem_arrays = [];
      for (let j = 0; j < 10; j++) {
        tem_arrays.push("empty");
      }

      this.board.push(tem_arrays);
    }
  }

  place(ship, coordinates, direction) {
    let [horizontal, vertical] = coordinates;

    let i = 0;
    while (i < ship.length) {
      this.board[horizontal][vertical] = ship;

      if (direction === "horizontal") {
        vertical++;
      } else if (direction === "vertical") {
        horizontal++;
      }

      i++;
    }
  }

  receiveAttack(x, y) {
    if (this.isHit(x, y)) {
      // record the hit coordinates
      let ship = this.board[x][y];
      ship.hit();
      this.board[x][y] = "hit";
      return true;
    } else if (this.board[x][y] === "miss" || this.board[x][y] === "hit") {
      return;
    } else {
      this.board[x][y] = "miss";
      return false;
    }
  }

  isHit(x, y) {
    if (
      this.board[x][y] !== "empty" &&
      this.board[x][y] !== "miss" &&
      this.board[x][y] !== "hit"
    ) {
      return true;
    } else {
      return false;
    }
  }

  get() {
    return this.board;
  }
}
