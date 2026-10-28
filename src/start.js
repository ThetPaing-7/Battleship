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
    dsiplayOne.textContent = "Player Three";
    boardOne.append(dsiplayOne);

    dsiplayTwo.textContent = "Player Two";
    boardTwo.append(dsiplayTwo);

    container.textContent = "";
    game.playerVsPlayer();
  });

  optionTwo.addEventListener("click", () => {
    dsiplayOne.textContent = "Computer";
    boardOne.append(dsiplayOne);

    dsiplayTwo.textContent = "Player";
    boardTwo.append(dsiplayTwo);

    container.textContent = "";
    game.playerVsComputer();
  });
}

startGame();
