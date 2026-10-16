import test_one from "./index";

test("Testing One", () => {
  expect(test_one(1, 2)).toBe(3);
});
