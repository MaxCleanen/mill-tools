import { parseName } from "./parseName";
import { constructName } from "./constructName";
import { IRecord } from "./types";

export const sortIntoSeries = (fileNames: string[] = []) => {
  const objects: IRecord[] = fileNames.map((file) => parseName(file));

  const groups = objects.reduce((acc, curr) => {
    if (acc[curr.SeriesNum]) {
      acc[curr.SeriesNum].push(constructName(curr));
    } else {
      acc[curr.SeriesNum] = [constructName(curr)];
    }
    return acc;
  }, {});

  return groups;
};
