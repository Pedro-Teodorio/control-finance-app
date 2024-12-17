import { ObjectSchema } from "realm";

export const UserSchema: ObjectSchema = {
  name: "User",
  properties: {
    _id: "string",
    name: "string",
    email: "string",
    password: "string",
    token: "string",
    balance: "double",
    created_at: "date",
    receives: "Receives[]",
  },
  primaryKey: "_id",
};
