import { parseName } from "./parseName";

test("Парсинг названия файла работает корректно", () => {
  const object = parseName("c31-s1-n010-t02.NC");

  expect(object.Detail).toBe("31");
  expect(object.SeriesNum).toBe("1");
  expect(object.Step).toBe("010");
  expect(object.Tool).toBe("02");
});
