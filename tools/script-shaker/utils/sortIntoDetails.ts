import { parseName } from "./parseName";

import { constructName } from "./constructName";

export const sortIntoDetails = (files: string[] = []) => {
  const objects = files.map((file) => parseName(file));
  const groups = objects.reduce((acc, curr) => {
    if (acc[curr.Detail]) {
      acc[curr.Detail].push(curr);
    } else {
      acc[curr.Detail] = [curr];
    }
    acc[curr.Detail] = acc[curr.Detail].sort(
      (a, b) => Number(a.Step) - Number(b.Step)
    );
    return acc;
  }, {});
  return groups;
};
