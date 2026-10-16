import Gameboard from "./gameboard.js";
import Ship from "./ship.js";
import Player from "./player.js";

export default class Render{

    displayBoard(board){
        let main_page = document.getElementById('main-body')
        let board_container = document.createElement('div')
        board_container.setAttribute('class','grids-holders')
        let main_board = board.get()
        for(let i = 0; i < main_board.length; i++){
            for(let j = 0; j < main_board[i].length; j++){
                let div = document.createElement("div")
                div.setAttribute('class','item')
                div.dataset.ground_condition = main_board[i][j]
                board_container.append(div)
            }
        }

        main_page.append(board_container)
    
    }
}