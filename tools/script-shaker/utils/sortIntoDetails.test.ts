import { constructName } from "./constructName";
import { sortIntoDetails } from "./sortIntoDetails";

test("Сортировка по деталям работает корректно", () => {
  const instruments = sortIntoDetails([
    "c31-s1-n020-t04.NC",
    "c41-s1-n020-t03.NC",
    "c45-s1-n020-t02.NC",
    "c35-s1-n020-t01.NC",
    "c33-s1-n010-t05.NC",
    "c35-s1-n010-t03.NC",
    "c41-s1-n010-t02.NC",
    "c31-s1-n010-t03.NC",
    "c33-s1-n020-t03.NC",
  ]);

  expect(constructName(instruments["31"][0])).toBe("c31-s1-n010-t03.NC");
  expect(constructName(instruments["31"][1])).toBe("c31-s1-n020-t04.NC");

  expect(constructName(instruments["33"][0])).toBe("c33-s1-n010-t05.NC");
  expect(constructName(instruments["33"][1])).toBe("c33-s1-n020-t03.NC");

  expect(constructName(instruments["35"][0])).toBe("c35-s1-n010-t03.NC");
  expect(constructName(instruments["35"][1])).toBe("c35-s1-n020-t01.NC");

  expect(constructName(instruments["41"][0])).toBe("c41-s1-n010-t02.NC");
  expect(constructName(instruments["41"][1])).toBe("c41-s1-n020-t03.NC");

  expect(constructName(instruments["45"][0])).toBe("c45-s1-n020-t02.NC");
});
