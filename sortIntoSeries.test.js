import { sortIntoSeries } from "./sortIntoSeries";

test("test", () => {
  const series = sortIntoSeries([
    "c31-s1-n010-t02.NC",
    "c35-s1-n010-t03.NC",
    "c35-s2-n010-t03.NC",
  ]);

  expect(Object.keys(series).length).toBe(2);
  expect(series["1"].length).toBe(2);
  expect(series["2"].length).toBe(1);
});
