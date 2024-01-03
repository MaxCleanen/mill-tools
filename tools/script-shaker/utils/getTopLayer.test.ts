import { getTopLayer } from "./getTopLayer";
import { Structure } from "./types";

const squareMock: Structure = {
  "31": [
    { Detail: "31", SeriesNum: "1", Step: "010", Tool: "02" },
    { Detail: "31", SeriesNum: "1", Step: "020", Tool: "01" },
    { Detail: "31", SeriesNum: "1", Step: "030", Tool: "03" },
    { Detail: "31", SeriesNum: "1", Step: "040", Tool: "04" },
    { Detail: "31", SeriesNum: "1", Step: "050", Tool: "02" },
  ],
  "33": [
    { Detail: "33", SeriesNum: "1", Step: "010", Tool: "04" },
    { Detail: "33", SeriesNum: "1", Step: "020", Tool: "02" },
    { Detail: "33", SeriesNum: "1", Step: "030", Tool: "05" },
    { Detail: "33", SeriesNum: "1", Step: "040", Tool: "03" },
    { Detail: "33", SeriesNum: "1", Step: "050", Tool: "01" },
  ],
  "35": [
    { Detail: "35", SeriesNum: "1", Step: "010", Tool: "03" },
    { Detail: "35", SeriesNum: "1", Step: "020", Tool: "04" },
    { Detail: "35", SeriesNum: "1", Step: "030", Tool: "03" },
    { Detail: "35", SeriesNum: "1", Step: "040", Tool: "01" },
    { Detail: "35", SeriesNum: "1", Step: "050", Tool: "02" },
  ],
  "41": [
    { Detail: "41", SeriesNum: "1", Step: "010", Tool: "02" },
    { Detail: "41", SeriesNum: "1", Step: "020", Tool: "05" },
    { Detail: "41", SeriesNum: "1", Step: "030", Tool: "02" },
    { Detail: "41", SeriesNum: "1", Step: "040", Tool: "03" },
    { Detail: "41", SeriesNum: "1", Step: "050", Tool: "01" },
  ],
  "45": [
    { Detail: "45", SeriesNum: "1", Step: "010", Tool: "05" },
    { Detail: "45", SeriesNum: "1", Step: "020", Tool: "03" },
    { Detail: "45", SeriesNum: "1", Step: "030", Tool: "03" },
    { Detail: "45", SeriesNum: "1", Step: "040", Tool: "02" },
    { Detail: "45", SeriesNum: "1", Step: "050", Tool: "01" },
  ],
};

test("Поиск верхнего слоя корректен для квадртаной структуры", () => {
  const result = getTopLayer(squareMock);
  expect(result).toStrictEqual([
    { Detail: "31", SeriesNum: "1", Step: "010", Tool: "02" },
    { Detail: "33", SeriesNum: "1", Step: "010", Tool: "04" },
    { Detail: "35", SeriesNum: "1", Step: "010", Tool: "03" },
    { Detail: "41", SeriesNum: "1", Step: "010", Tool: "02" },
    { Detail: "45", SeriesNum: "1", Step: "010", Tool: "05" },
  ]);
});

const triangleMock: Structure = {
  "31": [
    { Detail: "31", SeriesNum: "1", Step: "010", Tool: "02" },
    { Detail: "31", SeriesNum: "1", Step: "020", Tool: "01" },
    { Detail: "31", SeriesNum: "1", Step: "030", Tool: "03" },
    { Detail: "31", SeriesNum: "1", Step: "040", Tool: "04" },
    { Detail: "31", SeriesNum: "1", Step: "050", Tool: "02" },
  ],
  "33": [
    { Detail: "33", SeriesNum: "1", Step: "020", Tool: "02" },
    { Detail: "33", SeriesNum: "1", Step: "030", Tool: "05" },
    { Detail: "33", SeriesNum: "1", Step: "040", Tool: "03" },
    { Detail: "33", SeriesNum: "1", Step: "050", Tool: "01" },
  ],
  "35": [
    { Detail: "35", SeriesNum: "1", Step: "030", Tool: "03" },
    { Detail: "35", SeriesNum: "1", Step: "040", Tool: "01" },
    { Detail: "35", SeriesNum: "1", Step: "050", Tool: "02" },
  ],
  "41": [
    { Detail: "41", SeriesNum: "1", Step: "040", Tool: "03" },
    { Detail: "41", SeriesNum: "1", Step: "050", Tool: "01" },
  ],
  "45": [{ Detail: "45", SeriesNum: "1", Step: "050", Tool: "01" }],
};

test("Поиск верхнего слоя корректен для треугольной структуры", () => {
  const result = getTopLayer(triangleMock);
  expect(result).toStrictEqual([
    { Detail: "31", SeriesNum: "1", Step: "010", Tool: "02" },
    { Detail: "33", SeriesNum: "1", Step: "020", Tool: "02" },
    { Detail: "35", SeriesNum: "1", Step: "030", Tool: "03" },
    { Detail: "41", SeriesNum: "1", Step: "040", Tool: "03" },
    { Detail: "45", SeriesNum: "1", Step: "050", Tool: "01" },
  ]);
});
