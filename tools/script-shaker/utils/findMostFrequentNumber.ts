export const findMostFrequentNumber = (arr: number[] = []): number => {
  const numDict = arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] = acc[curr] + 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  let result: string | undefined = undefined;
  let counter = -1;

  for (const [key, value] of Object.entries<number>(numDict)) {
    if (value > counter) {
      result = key;
      counter = value;
    }
  }

  return Number(result);
};
