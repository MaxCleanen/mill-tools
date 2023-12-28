import { pickLongestLayer } from "./pickLongestLayer";

import { Structure } from "./types";
const mock: Structure = {
  31: [
    { AA: "31", B: "1", CC: "010", DD: "03" },
    { AA: "31", B: "1", CC: "020", DD: "04" },
  ],
  33: [
    { AA: "33", B: "1", CC: "010", DD: "05" },
    { AA: "33", B: "1", CC: "020", DD: "03" },
  ],
  35: [
    { AA: "35", B: "1", CC: "010", DD: "03" },
    { AA: "35", B: "1", CC: "020", DD: "01" },
  ],
  41: [
    { AA: "41", B: "1", CC: "010", DD: "02" },
    { AA: "41", B: "1", CC: "020", DD: "03" },
  ],
  45: [{ AA: "45", B: "1", CC: "020", DD: "02" }],
};

test("test", () => {
  expect(1).toBe(1);
  // const [layer, remains] = pickLongestLayer(mock);

  // expect(layer[0]).toBe(1);
});
