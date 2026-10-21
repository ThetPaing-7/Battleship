import Render from "./render.js";

export default class Action {
  Attack(board, element, id) {
    
    if (element.classList.value === "item") {
      console.log(element);
      // get coordinates from element
      let x = element.dataset.x;
      let y = element.dataset.y;
      // Receive attack in gameboard

      let condition = board.receiveAttack(x, y);

      // // get board holder from dom
      // container.textContent = ""
      let render = new Render();
      render.reRender(board, id);

      return condition;
    }
  }
}
