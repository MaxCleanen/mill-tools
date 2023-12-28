import { IRecord } from "./types";

export const constructName = (obj: IRecord) => {
  return `c${obj.AA}-s${obj.B}-n${obj.CC}-t${obj.DD}.NC`;
};
