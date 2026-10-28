export default class Render {
  displayBoard(board, type = "user", id) {
    let main_page = document.getElementById(id);
    let board_container = document.createElement("div");
    board_container.setAttribute("class", `${type}-grids-holders`);
    let main_board = board.get();
    for (let i = 0; i < main_board.length; i++) {
      for (let j = 0; j < main_board[i].length; j++) {
        let div = document.createElement("div");
        div.setAttribute("class", "item");
        div.dataset.ground_condition = main_board[i][j];
        div.dataset.x = i;
        div.dataset.y = j;
        let condition = main_board[i][j];
        if (condition === "miss") {
          div.textContent = "❌";
        } else if (condition === "hit") {
          div.textContent = "💥";
        }

        board_container.append(div);
      }
    }

    main_page.append(board_container);
  }

  reRender(board, id) {
    let main_page = document.getElementById(id);
    main_page.textContent = "";
    let render = new Render();
    render.displayBoard(board, "user", id);
  }
}
