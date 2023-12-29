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
    topLayer.map((x) => Number(x.DD))
  );
  const batch = topLayer.filter((x) => Number(x.DD) === mostFrequentInstrument);

  batch.forEach((p, idx) => {
    result[constructName(p)] = `${o}-b${batchNum}-s${idx + 1}-c${p.AA}-t${
      p.DD
    }.NC`;
  });
  const batchFileNames = batch.map((m) => constructName(m));
  fileNames = fileNames.filter((i) => batchFileNames.indexOf(i) === -1);

  const next_details = sortIntoDetails(fileNames);
  const next_topLayer = getTopLayer(next_details);
  let extraIdx = batch.length + 1;

  const extras = next_topLayer.filter(
    (x) => Number(x.DD) === mostFrequentInstrument
  );
  if (extras.length > 0) {
    extras.forEach((p) => {
      result[
        constructName(p)
      ] = `o1-b${batchNum}-s${extraIdx}-c${p.AA}-t${p.DD}.NC`;
      extraIdx++;
    });
    const extraFileNames = extras.map((x) => constructName(x));
    fileNames = fileNames.filter((i) => extraFileNames.indexOf(i) === -1);
  }

  if (fileNames.length > 0) {
    ++batchNum;
    return {
      ...result,
      ...shakeFileNames(fileNames, batchNum, o),
    };
  }
  return result;
};
