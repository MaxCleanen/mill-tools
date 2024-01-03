import { IRecord, Structure } from "./types";

export const getTopLayer = (structure: Structure): IRecord[] => {
  const result = [];

  //@ts-ignore
  for (const [key, value] of Object.entries<IRecord[]>(structure)) {
    //@ts-ignore
    result.push(value.sort((a, b) => Number(a.Step) - Number(b.Step))[0]);
  }

  return result;
};
