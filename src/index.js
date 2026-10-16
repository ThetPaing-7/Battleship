import "./styles.css";
import Render from "./render.js";
import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

let board_one = new Gameboard();
board_one.create();
let ship_one = new Ship(3);
let ship_two = new Ship(4);

board_one.place(ship_one, [2, 3], "horizontal");
board_one.receiveAttack(2, 3);
board_one.receiveAttack(2, 1);
board_one.place(ship_two, [4, 1], "horizontal");

let page = new Render();
console.log(page.displayBoard(board_one));
