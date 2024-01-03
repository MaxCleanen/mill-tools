import { IRecord } from "./types";

export const constructName = (obj: IRecord) => {
  return `c${obj.Detail}-s${obj.SeriesNum}-n${obj.Step}-t${obj.Tool}.NC`;
};
