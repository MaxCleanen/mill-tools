import { getTopLayer } from "./getTopLayer";
import { Structure } from "./types";

const squareMock: Structure = {
  "31": [
    { AA: "31", B: "1", CC: "010", DD: "02" },
    { AA: "31", B: "1", CC: "020", DD: "01" },
    { AA: "31", B: "1", CC: "030", DD: "03" },
    { AA: "31", B: "1", CC: "040", DD: "04" },
    { AA: "31", B: "1", CC: "050", DD: "02" },
  ],
  "33": [
    { AA: "33", B: "1", CC: "010", DD: "04" },
    { AA: "33", B: "1", CC: "020", DD: "02" },
    { AA: "33", B: "1", CC: "030", DD: "05" },
    { AA: "33", B: "1", CC: "040", DD: "03" },
    { AA: "33", B: "1", CC: "050", DD: "01" },
  ],
  "35": [
    { AA: "35", B: "1", CC: "010", DD: "03" },
    { AA: "35", B: "1", CC: "020", DD: "04" },
    { AA: "35", B: "1", CC: "030", DD: "03" },
    { AA: "35", B: "1", CC: "040", DD: "01" },
    { AA: "35", B: "1", CC: "050", DD: "02" },
  ],
  "41": [
    { AA: "41", B: "1", CC: "010", DD: "02" },
    { AA: "41", B: "1", CC: "020", DD: "05" },
    { AA: "41", B: "1", CC: "030", DD: "02" },
    { AA: "41", B: "1", CC: "040", DD: "03" },
    { AA: "41", B: "1", CC: "050", DD: "01" },
  ],
  "45": [
    { AA: "45", B: "1", CC: "010", DD: "05" },
    { AA: "45", B: "1", CC: "020", DD: "03" },
    { AA: "45", B: "1", CC: "030", DD: "03" },
    { AA: "45", B: "1", CC: "040", DD: "02" },
    { AA: "45", B: "1", CC: "050", DD: "01" },
  ],
};

test("Поиск верхнего слоя корректен для квадртаной структуры", () => {
  const result = getTopLayer(squareMock);
  expect(result).toStrictEqual([
    { AA: "31", B: "1", CC: "010", DD: "02" },
    { AA: "33", B: "1", CC: "010", DD: "04" },
    { AA: "35", B: "1", CC: "010", DD: "03" },
    { AA: "41", B: "1", CC: "010", DD: "02" },
    { AA: "45", B: "1", CC: "010", DD: "05" },
  ]);
});

const triangleMock: Structure = {
  "31": [
    { AA: "31", B: "1", CC: "010", DD: "02" },
    { AA: "31", B: "1", CC: "020", DD: "01" },
    { AA: "31", B: "1", CC: "030", DD: "03" },
    { AA: "31", B: "1", CC: "040", DD: "04" },
    { AA: "31", B: "1", CC: "050", DD: "02" },
  ],
  "33": [
    { AA: "33", B: "1", CC: "020", DD: "02" },
    { AA: "33", B: "1", CC: "030", DD: "05" },
    { AA: "33", B: "1", CC: "040", DD: "03" },
    { AA: "33", B: "1", CC: "050", DD: "01" },
  ],
  "35": [
    { AA: "35", B: "1", CC: "030", DD: "03" },
    { AA: "35", B: "1", CC: "040", DD: "01" },
    { AA: "35", B: "1", CC: "050", DD: "02" },
  ],
  "41": [
    { AA: "41", B: "1", CC: "040", DD: "03" },
    { AA: "41", B: "1", CC: "050", DD: "01" },
  ],
  "45": [{ AA: "45", B: "1", CC: "050", DD: "01" }],
};

test("Поиск верхнего слоя корректен для треугольной структуры", () => {
  const result = getTopLayer(triangleMock);
  expect(result).toStrictEqual([
    { AA: "31", B: "1", CC: "010", DD: "02" },
    { AA: "33", B: "1", CC: "020", DD: "02" },
    { AA: "35", B: "1", CC: "030", DD: "03" },
    { AA: "41", B: "1", CC: "040", DD: "03" },
    { AA: "45", B: "1", CC: "050", DD: "01" },
  ]);
});