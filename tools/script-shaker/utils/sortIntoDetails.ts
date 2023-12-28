import { parseName } from "./parseName";

import { constructName } from "./constructName";

export const sortIntoDetails = (files: string[] = []) => {
  const objects = files.map((file) => parseName(file));
  const groups = objects.reduce((acc, curr) => {
    if (acc[curr.AA]) {
      acc[curr.AA].push(curr);
    } else {
      acc[curr.AA] = [curr];
    }
    acc[curr.AA] = acc[curr.AA].sort((a, b) => Number(a.CC) - Number(b.CC));
    return acc;
  }, {});

  return groups;
};
