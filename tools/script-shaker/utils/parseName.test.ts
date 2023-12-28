import { parseName } from "./parseName";

test.only("Парсинг названия файла работает корректно", () => {
  const object = parseName("c31-s1-n010-t02.NC");

  expect(object.AA).toBe("31");
  expect(object.B).toBe("1");
  expect(object.CC).toBe("010");
  expect(object.DD).toBe("02");
});
