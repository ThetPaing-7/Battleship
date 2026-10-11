import Ship from "./ship.js"


export default class Gameboard{
    constructor(){
        this.board = []
    }

    create(){
        for(let i = 0; i < 10; i++){
            let tem_arrays = []
            for(let j = 0; j < 10; j++){
                tem_arrays.push('empty')
            }

            this.board.push(tem_arrays)
        }
    }

    place(ship,coordinates,direction){
        let [horizontal, vertical] = coordinates

        let i = 0
        while(i < ship.length){
            this.board[horizontal][vertical] = ship

            if(direction === 'horizontal'){
                vertical++
            }else if(direction === 'vertical'){
                horizontal++
            }

            i++
        }
    }

    receiveAttack(x,y){
        if(this.board[x][y] !== 'empty' && this.board[x][y] !== 'miss' && this.board[x][y] !== 'hit'){
            // record the hit coordinates
            let ship = this.board[x][y]
            ship.hit()
            this.board[x][y] = 'hit'
        }else{
            this.board[x][y] = 'miss'
        }
    }

    get(){
        return this.board
    }
}

let ship = new Ship(3)
let test_board = new Gameboard()
test_board.create()
test_board.place(ship,[3,1],'horizontal')
test_board.receiveAttack(3,1)
test_board.receiveAttack(3,1)
test_board.receiveAttack(4,1)
test_board.receiveAttack(4,1)
test_board.receiveAttack(5,1)
console.log(ship)
console.log(test_board.get())