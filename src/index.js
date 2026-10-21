import "./styles.css";
import Render from "./render.js";
import Gameboard from "./gameboard.js";
import Ship from "./ship.js";
import Action from "./action.js";
import Player from "./player.js";

let board_one = new Gameboard();
board_one.create();

board_one.create();
let ship_one = new Ship(3);
let ship_two = new Ship(4);

board_one.place(ship_one, [0, 3], "horizontal");
board_one.place(ship_one, [7, 1], "vertical");
board_one.place(ship_one, [2, 1], "vertical");
board_one.place(ship_one, [3, 1], "vertical");
board_one.place(ship_two, [6, 1], "horizontal");

const player_one = new Player("user-one", "Thet Paing Lin", board_one);
let page = new Render();
page.displayBoard(board_one, "user-one", "main-body");
let action = new Action();

let board_two = new Gameboard();
board_two.create();
let ship_three = new Ship(3);
let ship_four = new Ship(4);

board_two.place(ship_three, [0, 3], "horizontal");
board_two.place(ship_three, [7, 1], "vertical");
board_two.place(ship_four, [2, 1], "vertical");
board_two.place(ship_four, [3, 1], "vertical");
board_two.place(ship_four, [6, 1], "horizontal");

const player_two = new Player("user-two", "Thet Paing", board_one);
let page_two = new Render();
page_two.displayBoard(board_two, "user-two", "enemy-body");
let actionTwo = new Action();


// let value;
// function playeOnePlay(){
// let container = document.getElementById("main-body");
// container.addEventListener("click", (event) => {
//   let element = event.target;
//   value = action.Attack(board_one, element, "main-body");
// });
// }

// let container = document.getElementById('main-body')
// container.addEventListener("click", () => {
//   console.log(value);
// });

// function playerTwoPlay(){
//     let containe_two = document.getElementById("enemy-body");
    
//     containe_two.addEventListener("click", (event) => {
//       let element = event.target;
//       actionTwo.Attack(board_two, element, "enemy-body");
//     });
// }


// playeOnePlay()

// value === true ? playeOnePlay() : playerTwoPlay()

let currentPlayer = 1;

const mainContainer = document.getElementById("main-body");
const enemyContainer = document.getElementById("enemy-body");

function playeOnePlay(event) {
    if (currentPlayer !== 1) return;

    const element = event.target;

    const value = action.Attack(board_one, element, "main-body");

    if (value === false) {
        currentPlayer = 2;
    }
}

function playerTwoPlay(event) {
    if (currentPlayer !== 2) return;

    const element = event.target;

    const value = actionTwo.Attack(board_two, element, "enemy-body");

    if (value === false) {
        currentPlayer = 1;
    }
}

mainContainer.addEventListener("click", playeOnePlay);
enemyContainer.addEventListener("click", playerTwoPlay);