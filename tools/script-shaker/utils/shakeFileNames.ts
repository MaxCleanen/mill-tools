import { constructName } from "./constructName";
import { findMostFrequentTool } from "./findMostFrequentNumber";
import { getTopLayer } from "./getTopLayer";
import { sortIntoDetails } from "./sortIntoDetails";

const findExtras = (
  fileNames: string[],
  oNum: string,
  batchNum: number,
  mostFrequentInstrument: number,
  stepOffset: number
) => {
  const next_details = sortIntoDetails(fileNames);
  const next_topLayer = getTopLayer(next_details);

  const extras = next_topLayer.filter(
    (x) => Number(x.Tool) === mostFrequentInstrument
  );

  const result = {};
  const batchFileNames = [];

  if (extras.length > 0) {
    // const extraFileNames = [];
    extras.forEach((p) => {
      const name = constructName(p);
      result[name] = `${oNum}-b${batchNum}-s${stepOffset}--${name}`;
      stepOffset++;
      batchFileNames.push(name);
    });
  }

  let leftFileNames = fileNames.filter((i) => batchFileNames.indexOf(i) === -1);
  const next_next_details = sortIntoDetails(leftFileNames);
  const next_next_topLayer = getTopLayer(next_next_details);

  const next_extras = next_next_topLayer.filter(
    (x) => Number(x.Tool) === mostFrequentInstrument
  );
  if (next_extras.length > 0) {
    const { r: _r, b: _b } = findExtras(
      leftFileNames,
      oNum,
      batchNum,
      mostFrequentInstrument,
      stepOffset
    );
    return {
      r: {
        ...result,
        ..._r,
      },
      b: [...batchFileNames, ..._b],
    };
  } else {
    return {
      r: result,
      b: batchFileNames,
    };
  }
};

export const shakeFileNames = (
  fileNames: string[],
  batchNum: number = 1,
  oNum: string
) => {
  let result = {};
  let batchFileNames = [];

  const details = sortIntoDetails(fileNames);
  const topLayer = getTopLayer(details);

  const mostFrequentInstrument = findMostFrequentTool(
    topLayer.map((x) => Number(x.Tool))
  );
  const batch = topLayer.filter(
    (x) => Number(x.Tool) === mostFrequentInstrument
  );

  batch.forEach((p, idx) => {
    const name = constructName(p);
    result[name] = `${oNum}-b${batchNum}-s${idx + 1}--${name}`;
    batchFileNames.push(name);
  });
  let leftFileNames = fileNames.filter((i) => batchFileNames.indexOf(i) === -1);

  let stepOffset = batch.length + 1;
  const { r: _r, b: _b } = findExtras(
    leftFileNames,
    oNum,
    batchNum,
    mostFrequentInstrument,
    stepOffset
  );

  result = {
    ...result,
    ..._r,
  };
  batchFileNames = [...batchFileNames, ..._b];

  leftFileNames = leftFileNames.filter((i) => batchFileNames.indexOf(i) === -1);

  if (leftFileNames.length > 0) {
    const { lastBatchName, fileNamesMap } = shakeFileNames(
      leftFileNames,
      batchNum + 1,
      oNum
    );
    return {
      lastBatchName: lastBatchName,
      fileNamesMap: {
        ...result,
        ...fileNamesMap,
      },
    };
  }

  return {
    lastBatchName: batchNum,
    fileNamesMap: result,
  };
};
