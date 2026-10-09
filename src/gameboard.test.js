import Gameboard from './gameboard.js'
import Ship from './ship.js'

test('Check coordinates of gameboard',()=>{
    let board_one = new Gameboard()
    board_one.create()

    expect(board_one.get().length).toBe(10)
})

test('Check Place coordinates vertical',()=>{
    
    let board_two = new Gameboard()
    board_two.create()

    let ship = new Ship(3)
    board_two.place(ship,[3,1],'vertical')

    let coordinates = board_two.get()
    expect(coordinates[3][1]).toBe('ship')
    expect(coordinates[4][1]).toBe('ship')
    expect(coordinates[5][1]).toBe('ship')
    
})


test('Check Place coordinates horizontal',()=>{
    
    let board_two = new Gameboard()
    board_two.create()

    let ship = new Ship(5)
    board_two.place(ship,[2,1],'horizontal')

    let coordinates = board_two.get()
    expect(coordinates[2][1]).toBe('ship')
    expect(coordinates[2][2]).toBe('ship')
    expect(coordinates[2][3]).toBe('ship')
    expect(coordinates[2][4]).toBe('ship')
    expect(coordinates[2][5]).toBe('ship')
  
})