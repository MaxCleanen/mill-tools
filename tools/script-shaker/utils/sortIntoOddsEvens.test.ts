import { sortIntoTurns } from "./sortIntoOddsEvens";

test("Сортировка по сторонам работает корректно", () => {
  const oddsEvensGroup = sortIntoTurns([
    "c31-s1-n010-t02.NC",
    "c32-s1-n010-t02.NC",
    "c33-s1-n010-t03.NC",
  ]);

  expect(Object.keys(oddsEvensGroup).length).toBe(2);
  expect(oddsEvensGroup["o"].length).toBe(2);
  expect(oddsEvensGroup["e"].length).toBe(1);
});

test("Сортировка по сторонам работает корректно", () => {
  const oddsEvensGroup = sortIntoTurns([
    "c01-s1-n10-t11.NC",
    "c01-s1-n20-t01.NC",
    "c01-s1-n30-t07.NC",
    "c01-s1-n40-t07.NC",
    "c01-s1-n50-t07.NC",
    "c01-s1-n60-t05.NC",
    "c01-s1-n70-t01.NC",
    "c05-s1-n10-t11.NC",
    "c05-s1-n20-t01.NC",
    "c05-s1-n30-t07.NC",
    "c05-s1-n40-t07.NC",
    "c05-s1-n50-t07.NC",
    "c05-s1-n60-t05.NC",
    "c05-s1-n70-t01.NC",
  ]);

  expect(Object.keys(oddsEvensGroup).length).toBe(1);
  expect(oddsEvensGroup["o"].length).toBe(14);
});

test("Сортировка по сторонам работает корректно", () => {
  const oddsEvensGroup = sortIntoTurns([
    "c02-s1-n10-t11.NC",
    "c02-s1-n20-t01.NC",
    "c02-s1-n30-t07.NC",
    "c02-s1-n40-t07.NC",
    "c02-s1-n50-t07.NC",
    "c02-s1-n60-t05.NC",
    "c02-s1-n70-t01.NC",
    "c05-s1-n10-t11.NC",
    "c05-s1-n20-t01.NC",
    "c05-s1-n30-t07.NC",
    "c05-s1-n40-t07.NC",
    "c05-s1-n50-t07.NC",
    "c05-s1-n60-t05.NC",
    "c05-s1-n70-t01.NC",
  ]);

  expect(Object.keys(oddsEvensGroup).length).toBe(2);
  expect(oddsEvensGroup["o"].length).toBe(7);
  expect(oddsEvensGroup["e"].length).toBe(7);
});
