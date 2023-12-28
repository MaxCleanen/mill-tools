export interface IRecord {
  AA: string;
  B: string;
  CC: string;
  DD: string;
}

export interface Structure {
  [index: number]: IRecord[];
}
