import { findMostFrequentTool } from "./findMostFrequentNumber";

test("Если одно число встречается чаще других, выбираем его", () => {
  const res = findMostFrequentTool([1, 2, 3, 3, 4]);
  expect(res).toBe(3);
});

test("Если все числа разные, выбираем наименьшее", () => {
  const res = findMostFrequentTool([2, 3, 1, 4, 5]);
  expect(res).toBe(1);
});

test("Если два числа имеют одинаковое количество повторений, выбираем наименьшее", () => {
  const res = findMostFrequentTool([2, 1, 2, 1, 3]);
  expect(res).toBe(1);
});
