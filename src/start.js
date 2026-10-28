import "./styles.css";
import setup from "./index.js";
import { playing } from "./index.js";

console.log("hello world");

setup();

const game = playing();

function startGame() {
  const container = document.getElementById("setup");

  const boardOne = document.getElementById("main-body");

  const boardTwo = document.getElementById("enemy-body");

  const prompt = document.createElement("div");
  prompt.textContent = "Please select an option: ";

  const optionOne = document.createElement("button");
  optionOne.textContent = "Player Vs Player";

  const optionTwo = document.createElement("button");
  optionTwo.textContent = "Player Vs Computer";

  const dsiplayOne = document.createElement("div");
  const dsiplayTwo = document.createElement("div");

  

  // Append the options butons to container
  container.append(prompt, optionOne, optionTwo);

  optionOne.addEventListener("click", () => {
    dsiplayOne.textContent = "Player One Board";
    boardOne.append(dsiplayOne);

    dsiplayTwo.textContent = "Player Two Board";
    boardTwo.append(dsiplayTwo);

    container.textContent = "";
    container.hidden = true
    game.playerVsPlayer();
  });

  optionTwo.addEventListener("click", () => {
    dsiplayOne.textContent = "Computer Board";
    boardOne.append(dsiplayOne);

    dsiplayTwo.textContent = "Player Board";
    boardTwo.append(dsiplayTwo);

    container.textContent = "";
    container.hidden = true
    game.playerVsComputer();
  });
}

startGame();
