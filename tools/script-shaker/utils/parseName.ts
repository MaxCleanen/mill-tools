import { IRecord } from "./types";

export const parseName = (fileName: string): IRecord => {
  if (!/^c(\d+)-s(\d+)-n(\d+)-t(\d+)\.NC*$/.test(fileName)) {
    throw new Error("Bad file name: " + fileName);
  }

  return {
    Detail: /c(\d+)/.exec(fileName)?.[1] ?? "",
    SeriesNum: /s(\d+)/.exec(fileName)?.[1] ?? "",
    Step: /n(\d+)/.exec(fileName)?.[1] ?? "",
    Tool: /t(\d+)/.exec(fileName)?.[1] ?? "",
  };
};
