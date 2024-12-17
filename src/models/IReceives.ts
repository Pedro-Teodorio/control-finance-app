import { Object } from "realm";
export interface IReceives {
  _id: string;
  description: string;
  value: number;
  type: string;
  date: string;
  created_at: Date;
}


export type ReceivesObject = IReceives & Object;