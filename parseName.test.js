import { parseName } from "./parseName";

test("test", () => {
  const object = parseName("c31-s1-n010-t02.NC");

  expect(object.AA).toBe("31");
});
