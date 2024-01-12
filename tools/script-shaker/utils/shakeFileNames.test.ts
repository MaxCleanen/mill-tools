import { shakeFileNames } from "./shakeFileNames";

test("Рассортировка правильная", () => {
  const result = shakeFileNames(
    [
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
    ],
    1,
    "o",
    1
  );
  expect(result["c31-s1-n010-t02.NC"]).toBe("o1-b1-s1|c31-s1-n010-t02.NC");
  expect(result["c41-s1-n010-t02.NC"]).toBe("o1-b1-s2|c41-s1-n010-t02.NC");

  expect(result["c41-s1-n020-t05.NC"]).toBe("o1-b2-s1|c41-s1-n020-t05.NC");
  expect(result["c45-s1-n010-t05.NC"]).toBe("o1-b2-s2|c45-s1-n010-t05.NC");

  expect(result["c35-s1-n010-t03.NC"]).toBe("o1-b3-s1|c35-s1-n010-t03.NC");
  expect(result["c45-s1-n020-t03.NC"]).toBe("o1-b3-s2|c45-s1-n020-t03.NC");
  expect(result["c45-s1-n030-t03.NC"]).toBe("o1-b3-s3|c45-s1-n030-t03.NC");

  expect(result["c41-s1-n030-t02.NC"]).toBe("o1-b4-s1|c41-s1-n030-t02.NC");
  expect(result["c45-s1-n040-t02.NC"]).toBe("o1-b4-s2|c45-s1-n040-t02.NC");

  expect(result["c31-s1-n020-t01.NC"]).toBe("o1-b5-s1|c31-s1-n020-t01.NC");
  expect(result["c45-s1-n050-t01.NC"]).toBe("o1-b5-s2|c45-s1-n050-t01.NC");

  expect(result["c31-s1-n030-t03.NC"]).toBe("o1-b6-s1|c31-s1-n030-t03.NC");
  expect(result["c41-s1-n040-t03.NC"]).toBe("o1-b6-s2|c41-s1-n040-t03.NC");

  expect(result["c31-s1-n040-t04.NC"]).toBe("o1-b7-s1|c31-s1-n040-t04.NC");
  expect(result["c33-s1-n010-t04.NC"]).toBe("o1-b7-s2|c33-s1-n010-t04.NC");
  expect(result["c35-s1-n020-t04.NC"]).toBe("o1-b7-s3|c35-s1-n020-t04.NC");

  expect(result["c31-s1-n050-t02.NC"]).toBe("o1-b8-s1|c31-s1-n050-t02.NC");
  expect(result["c33-s1-n020-t02.NC"]).toBe("o1-b8-s2|c33-s1-n020-t02.NC");

  expect(result["c41-s1-n050-t01.NC"]).toBe("o1-b9-s1|c41-s1-n050-t01.NC");

  expect(result["c35-s1-n030-t03.NC"]).toBe("o1-b10-s1|c35-s1-n030-t03.NC");

  expect(result["c35-s1-n040-t01.NC"]).toBe("o1-b11-s1|c35-s1-n040-t01.NC");

  expect(result["c35-s1-n050-t02.NC"]).toBe("o1-b12-s1|c35-s1-n050-t02.NC");

  expect(result["c33-s1-n030-t05.NC"]).toBe("o1-b13-s1|c33-s1-n030-t05.NC");

  expect(result["c33-s1-n040-t03.NC"]).toBe("o1-b14-s1|c33-s1-n040-t03.NC");

  expect(result["c33-s1-n050-t01.NC"]).toBe("o1-b15-s1|c33-s1-n050-t01.NC");

  expect(Object.keys(result).length).toBe(25);
});

test("Две одинаковых детали. Рассортировка правильная", () => {
  const result = shakeFileNames(
    [
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
    ],
    1,
    "o",
    1
  );
  expect(result["c01-s1-n10-t11.NC"]).toBe("o1-b1-s1|c01-s1-n10-t11.NC");
  expect(result["c01-s1-n20-t01.NC"]).toBe("o1-b2-s1|c01-s1-n20-t01.NC");
  expect(result["c01-s1-n30-t07.NC"]).toBe("o1-b3-s1|c01-s1-n30-t07.NC");
  expect(result["c01-s1-n40-t07.NC"]).toBe("o1-b3-s3|c01-s1-n40-t07.NC"); //
  expect(result["c01-s1-n50-t07.NC"]).toBe("o1-b4-s1|c01-s1-n50-t07.NC");
  expect(result["c01-s1-n60-t05.NC"]).toBe("o1-b5-s1|c01-s1-n60-t05.NC");
  expect(result["c01-s1-n70-t01.NC"]).toBe("o1-b6-s1|c01-s1-n70-t01.NC");

  expect(result["c05-s1-n10-t11.NC"]).toBe("o1-b1-s2|c05-s1-n10-t11.NC");
  expect(result["c05-s1-n20-t01.NC"]).toBe("o1-b2-s2|c05-s1-n20-t01.NC");
  expect(result["c05-s1-n30-t07.NC"]).toBe("o1-b3-s2|c05-s1-n30-t07.NC");
  expect(result["c05-s1-n40-t07.NC"]).toBe("o1-b3-s4|c05-s1-n40-t07.NC");
  expect(result["c05-s1-n50-t07.NC"]).toBe("o1-b4-s2|c05-s1-n50-t07.NC");
  expect(result["c05-s1-n60-t05.NC"]).toBe("o1-b5-s2|c05-s1-n60-t05.NC");
  expect(result["c05-s1-n70-t01.NC"]).toBe("o1-b6-s2|c05-s1-n70-t01.NC");
});
