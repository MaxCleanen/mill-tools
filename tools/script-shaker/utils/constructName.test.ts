import { constructName } from "./constructName";

test("constructName", () => {
  const result = constructName({
    Detail: "31",
    SeriesNum: "1",
    Step: "010",
    Tool: "02",
  });

  expect(result).toBe("c31-s1-n010-t02.NC");
});
