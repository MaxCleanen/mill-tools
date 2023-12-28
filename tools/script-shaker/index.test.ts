import { main } from ".";

const fileNames = [
  "c31-s1-n010-t02.NC",
  "c33-s1-n010-t04.NC",
  "c35-s1-n010-t03.NC",
  "c41-s1-n010-t02.NC",
  "c45-s1-n010-t05.NC",
  "c31-s1-n020-t01.NC",
  "c33-s1-n020-t02.NC",
  "c35-s1-n020-t04.NC",
  "c41-s1-n020-t05.NC",
  "c45-s1-n020-t03.NC",
  "c31-s1-n030-t03.NC",
  "c33-s1-n030-t05.NC",
  "c35-s1-n030-t03.NC",
  "c41-s1-n030-t02.NC",
  "c45-s1-n030-t03.NC",
  "c31-s1-n040-t04.NC",
  "c33-s1-n040-t03.NC",
  "c35-s1-n040-t01.NC",
  "c41-s1-n040-t03.NC",
  "c45-s1-n040-t02.NC",
  "c31-s1-n050-t02.NC",
  "c33-s1-n050-t01.NC",
  "c35-s1-n050-t02.NC",
  "c41-s1-n050-t01.NC",
  "c45-s1-n050-t01.NC",
];

test("Рассортировка правильная", () => {
  const result = main(fileNames);
  expect(result["c31-s1-n010-t02.NC"]).toBe("o1-b1-s1-c31-t02.NC");
  expect(result["c41-s1-n010-t02.NC"]).toBe("o1-b1-s2-c41-t02.NC");

  expect(result["c41-s1-n020-t05.NC"]).toBe("o1-b2-s1-c41-t05.NC");
  expect(result["c45-s1-n010-t05.NC"]).toBe("o1-b2-s2-c45-t05.NC");

  expect(result["c35-s1-n010-t03.NC"]).toBe("o1-b3-s1-c35-t03.NC");
  expect(result["c45-s1-n020-t03.NC"]).toBe("o1-b3-s2-c45-t03.NC");
  expect(result["c45-s1-n030-t03.NC"]).toBe("o1-b3-s3-c45-t03.NC");

  expect(result["c41-s1-n030-t02.NC"]).toBe("o1-b4-s1-c41-t02.NC");
  expect(result["c45-s1-n040-t02.NC"]).toBe("o1-b4-s2-c45-t02.NC");

  expect(result["c31-s1-n020-t01.NC"]).toBe("o1-b5-s1-c31-t01.NC");
  expect(result["c45-s1-n050-t01.NC"]).toBe("o1-b5-s2-c45-t01.NC");

  expect(result["c31-s1-n030-t03.NC"]).toBe("o1-b6-s1-c31-t03.NC");
  expect(result["c41-s1-n040-t03.NC"]).toBe("o1-b6-s2-c41-t03.NC");

  expect(result["c31-s1-n040-t04.NC"]).toBe("o1-b7-s1-c31-t04.NC");
  expect(result["c33-s1-n010-t04.NC"]).toBe("o1-b7-s2-c33-t04.NC");
  expect(result["c35-s1-n020-t04.NC"]).toBe("o1-b7-s3-c35-t04.NC");

  expect(result["c31-s1-n050-t02.NC"]).toBe("o1-b8-s1-c31-t02.NC");
  expect(result["c33-s1-n020-t02.NC"]).toBe("o1-b8-s2-c33-t02.NC");

  expect(result["c41-s1-n050-t01.NC"]).toBe("o1-b9-s1-c41-t01.NC");

  expect(result["c35-s1-n030-t03.NC"]).toBe("o1-b10-s1-c35-t03.NC");

  expect(result["c35-s1-n040-t01.NC"]).toBe("o1-b11-s1-c35-t01.NC");

  expect(result["c35-s1-n050-t02.NC"]).toBe("o1-b12-s1-c35-t02.NC");

  expect(result["c33-s1-n030-t05.NC"]).toBe("o1-b13-s1-c33-t05.NC");

  expect(result["c33-s1-n040-t03.NC"]).toBe("o1-b14-s1-c33-t03.NC");

  expect(result["c33-s1-n050-t01.NC"]).toBe("o1-b15-s1-c33-t01.NC");

  expect(Object.keys(result).length).toBe(25);
});
