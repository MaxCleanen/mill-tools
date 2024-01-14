import { constructName } from "./constructName";
import { findMostFrequentNumber } from "./findMostFrequentNumber";
import { getTopLayer } from "./getTopLayer";
import { sortIntoDetails } from "./sortIntoDetails";

export const shakeFileNames = (
  fileNames: string[],
  batchNum: number = 1,
  o: string
) => {
  const result = {};
  const details = sortIntoDetails(fileNames);
  const topLayer = getTopLayer(details);

  const mostFrequentInstrument = findMostFrequentNumber(
    topLayer.map((x) => Number(x.Tool))
  );
  const batch = topLayer.filter(
    (x) => Number(x.Tool) === mostFrequentInstrument
  );

  const batchFileNames = [];
  batch.forEach((p, idx) => {
    const name = constructName(p);
    result[name] = `${o}-b${batchNum}-s${idx + 1}|${name}`;
    batchFileNames.push(name);
  });
  fileNames = fileNames.filter((i) => batchFileNames.indexOf(i) === -1);

  const next_details = sortIntoDetails(fileNames);
  const next_topLayer = getTopLayer(next_details);
  let extraIdx = batch.length + 1;

  const extras = next_topLayer.filter(
    (x) => Number(x.Tool) === mostFrequentInstrument
  );
  if (extras.length > 0) {
    // const extraFileNames = [];
    extras.forEach((p) => {
      const name = constructName(p);
      result[name] = `${o}-b${batchNum}-s${extraIdx}|${name}`;
      extraIdx++;
      batchFileNames.push(name);
    });
  }
  fileNames = fileNames.filter((i) => batchFileNames.indexOf(i) === -1);

  if (fileNames.length > 0) {
    // ++batchNum;

    const { lastBatchName, fileNamesMap } = shakeFileNames(
      fileNames,
      batchNum + 1,
      o
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
