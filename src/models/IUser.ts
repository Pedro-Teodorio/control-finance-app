import { Object } from "realm";
import { IReceives } from "./IReceives";
export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  balance: number;
  created_at: Date;
  receives: IReceives[];
}

export type UserObject = IUser & Object;
