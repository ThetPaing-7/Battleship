import Ship from "./ship.js"

test('Testing Ship Object One',()=>{
    const ship_one = new Ship(1)
    ship_one.hit()
    expect(ship_one.isSunk()).toEqual(true)
})

test('Testing Ship Object Two',()=>{
    const ship_two = new Ship(2)
    ship_two.hit()
    expect(ship_two.isSunk()).toEqual(false)
})