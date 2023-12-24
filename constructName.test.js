import { constructName } from "./constructName";

test("constructName", () => {
  const result = constructName({ AA: "31", B: "1", CC: "010", DD: "02" });

  expect(result).toBe("c31-s1-n010-t02.NC");
});
