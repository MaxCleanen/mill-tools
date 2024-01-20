export const findMostFrequentTool = (toolNums: number[] = []): number => {
  const numDict: { [key: number]: number } = toolNums.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] = acc[curr] + 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  const [[result]] = Object.entries(numDict).sort((a, b) => b[1] - a[1]);
  return Number(result);
};
