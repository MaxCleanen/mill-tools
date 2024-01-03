export interface IRecord {
  Detail: string;
  SeriesNum: string;
  Step: string;
  Tool: string;
}

export interface Structure {
  [index: number]: IRecord[];
}
