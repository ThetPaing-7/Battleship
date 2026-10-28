import Render from "./render.js";
import Gameboard from "./gameboard.js";
import Ship from "./ship.js";
import Action from "./action.js";
import Player from "./player.js";
import Random_Generate from "./random_generate.js";
import Random_place from "./random_place.js";

let board_one = new Gameboard();
board_one.create();
let action = new Action();

let board_two = new Gameboard();
board_two.create();
let actionTwo = new Action();

export default function setup() {
  let ships_length = [5, 4, 4, 3, 3, 3, 3];
  makeAndPutShips(board_one);

  let page = new Render();
  page.displayBoard(board_one, "user-one", "main-body");

  // Start of board two
  makeAndPutShips(board_two);

  function makeAndPutShips(board) {
    for (let i = 0; i < ships_length.length; i++) {
      const ship = new Ship(ships_length[i]);
      Random_place.placeShip(ship, board);
    }
  }

  let page_two = new Render();
  page_two.displayBoard(board_two, "user-two", "enemy-body");
}

export const playing = () => {
  let currentPlayer = 1;

  const mainContainer = document.getElementById("main-body");
  const enemyContainer = document.getElementById("enemy-body");

  function playeOnePlay(event, isAganistComputer = true) {
    if (currentPlayer !== 1) return;

    const element = event.target.closest(".item");
    if (!element) return;

    if (islost(board_one)) {
      if(isAganistComputer){
        alert('Computer Has lost! Please restart')
      }else{
        alert("Player One has lost! Please restart");
      }
      return;
    }

    const value = action.Attack(board_one, element, "main-body");

    if (value === false) {
      currentPlayer = 2;

      if (isAganistComputer === true) {
        computerPlay();
      }
    }
  }

  function playerTwoPlay(event) {
    if (currentPlayer !== 2) return;

    const element = event.target.closest(".item");
    if (!element) return;

    if (islost(board_two)) {
      alert("Player Two has lost! Please restart");
    }

    const value = actionTwo.Attack(board_two, element, "enemy-body");

    if (value === false) {
      currentPlayer = 1;
    }
  }

  function computerPlay() {
    if (currentPlayer !== 2) return;

    if (islost(board_two)) {
      alert("Computer Has lost the game");
    }

    const { x: x, y: y } = Random_Generate.getTwoPoints();
    const element = actionTwo.getCell("enemy-body", x, y);

    if (!element) {
      return computerPlay();
    }
    const value = actionTwo.Attack(board_two, element, "enemy-body");

    if (value === false) {
      currentPlayer = 1;
    } else {
      computerPlay();
    }
  }

  // to play playerone vs playertwo
  function playerVsPlayer() {
    let isAganistComputer = false;
    mainContainer.addEventListener("click", (event) => {
      playeOnePlay(event, isAganistComputer);
    });

    enemyContainer.addEventListener("click", (event) => {
      playerTwoPlay(event);
      console.log(board_one.getStatus());
      console.log(board_two.getStatus());
    });
  }

  // to play computer vs player
  function playerVsComputer() {
    mainContainer.addEventListener("click", (event) => {
      playeOnePlay(event);
      console.log(board_one.getStatus());
      console.log(board_two.getStatus());
    });
  }

  function islost(board) {
    return board.isAllSink();
  }

  return { playerVsComputer, playerVsPlayer };
};
