import "./styles.css";
import Render from "./render.js";
import Gameboard from "./gameboard.js";
import Ship from "./ship.js";
import Action from "./action.js";

let board_one = new Gameboard();
board_one.create();
let ship_one = new Ship(3);
let ship_two = new Ship(4);

board_one.place(ship_one, [0, 3], "horizontal");
board_one.place(ship_one, [7, 1], "vertical");
board_one.place(ship_one, [2, 1], "vertical");
board_one.place(ship_one, [3, 1], "vertical");
board_one.place(ship_two, [6, 1], "horizontal");

let page = new Render();
page.displayBoard(board_one)
let action = new Action()
action.Attack(board_one)
