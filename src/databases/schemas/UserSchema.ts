import { ObjectSchema } from "realm";

export const UserSchema: ObjectSchema = {
  name: "User",
  properties: {
    _id: "string",
    name: "string",
    email: "string",
    password: "string",
    token: "string",
    created_at: "date"
  },
  primaryKey: "_id"
};
