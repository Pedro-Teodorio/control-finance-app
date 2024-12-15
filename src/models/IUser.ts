import { Object } from "realm";
export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  created_at: Date;
}

export type UserObject = IUser & Object;
