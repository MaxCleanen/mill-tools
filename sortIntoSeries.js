import { parseName } from "./parseName";
import { constructName } from "./constructName";

export const sortIntoSeries = (files = []) => {
  const objects = files.map((file) => parseName(file));

  const groups = objects.reduce((acc, curr) => {
    if (acc[curr.B]) {
      acc[curr.B].push(constructName(curr));
    } else {
      acc[curr.B] = [constructName(curr)];
    }
    return acc;
  }, {});

  // console.log("SERIES", groups);

  return groups;
};
