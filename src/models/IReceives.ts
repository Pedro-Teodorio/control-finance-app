import { Object } from "realm";
export interface IReceives {
  _id: string;
  value: number;
  type: string;
  date: string;
  created_at: Date;
}


export type ReceivesObject = IReceives & Object;