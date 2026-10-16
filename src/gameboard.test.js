import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

test("Check coordinates of gameboard", () => {
  let board_one = new Gameboard();
  board_one.create();

  expect(board_one.get().length).toBe(10);
});

test("Check Place coordinates vertical", () => {
  let board_two = new Gameboard();
  board_two.create();

  let ship = new Ship(3);
  board_two.place(ship, [3, 1], "vertical");

  let coordinates = board_two.get();
  expect(coordinates[3][1]).not.toBe("empty");
  expect(coordinates[4][1]).not.toBe("empty");
  expect(coordinates[5][1]).not.toBe("empty");
});

test("Check Place coordinates horizontal", () => {
  let board_two = new Gameboard();
  board_two.create();

  let ship = new Ship(5);
  board_two.place(ship, [2, 1], "horizontal");

  let coordinates = board_two.get();
  expect(coordinates[2][1]).not.toBe("empty");
  expect(coordinates[2][2]).not.toBe("empty");
  expect(coordinates[2][3]).not.toBe("empty");
  expect(coordinates[2][4]).not.toBe("empty");
  expect(coordinates[2][5]).not.toBe("empty");
});

test("Check Hit function", () => {
  let board_two = new Gameboard();
  board_two.create();

  let ship = new Ship(5);
  board_two.place(ship, [2, 1], "horizontal");

  let coordinates = board_two.get();
  expect(coordinates[2][1]).not.toBe("empty");
  expect(coordinates[2][2]).not.toBe("empty");
  expect(coordinates[2][3]).not.toBe("empty");
  expect(coordinates[2][4]).not.toBe("empty");
  expect(coordinates[2][5]).not.toBe("empty");
});

test("Check record", () => {
  let test_board = new Gameboard();
  test_board.create();

  let ship = new Ship(3);
  test_board.place(ship, [3, 1], "horizontal");

  test_board.receiveAttack(3, 1);
  test_board.receiveAttack(3, 2);
  test_board.receiveAttack(4, 1);
  test_board.receiveAttack(5, 1);

  let coordinates = test_board.get();

  expect(coordinates[3][1]).toBe("hit");
  expect(coordinates[3][2]).toBe("hit");
  expect(coordinates[4][1]).toBe("miss");
  expect(coordinates[5][1]).toBe("miss");
});

test("Check All sink", () => {
  let test_board = new Gameboard();
  test_board.create();

  let ship = new Ship(4);
  test_board.place(ship, [2, 1], "horizontal");

  test_board.receiveAttack(2, 1);
  test_board.receiveAttack(2, 2);
  test_board.receiveAttack(2, 3);
  test_board.receiveAttack(2, 4);

  expect(test_board.isAllSink()).toBe(true);
});

test("Check still afloat", () => {
  let test_board = new Gameboard();
  test_board.create();

  let ship = new Ship(3);
  test_board.place(ship, [4, 2], "horizontal");

  test_board.receiveAttack(2, 1);

  expect(test_board.isAllSink()).toBe(false);
});
