import { sortIntoTurns } from "./sortIntoOddsEvens";

test("Сортировка по сериям работает корректно", () => {
  const oddsEvensGroup = sortIntoTurns([
    "c31-s1-n010-t02.NC",
    "c32-s1-n010-t02.NC",
    "c33-s1-n010-t03.NC",
  ]);

  expect(Object.keys(oddsEvensGroup).length).toBe(2);
  expect(oddsEvensGroup["o"].length).toBe(2);
  expect(oddsEvensGroup["e"].length).toBe(1);
});
