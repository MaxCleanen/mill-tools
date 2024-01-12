import { parseName } from "./parseName";
import { constructName } from "./constructName";
import { IRecord } from "./types";

export const sortIntoTurns = (fileNames: string[] = []) => {
  const objects: IRecord[] = fileNames.map((file) => parseName(file));

  const turns = objects.reduce((acc, curr) => {
    const evenOrOdd = Number(curr.Detail) % 2 === 0 ? "e" : "o";
    if (acc[evenOrOdd]) {
      acc[evenOrOdd].push(constructName(curr));
    } else {
      acc[evenOrOdd] = [constructName(curr)];
    }
    return acc;
  }, {});

  console.log("LOGGG turns", turns);
  return turns;
};
