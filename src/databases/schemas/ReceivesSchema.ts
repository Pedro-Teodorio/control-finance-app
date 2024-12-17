import { ObjectSchema } from "realm";

export const ReceivesSchema: ObjectSchema = {
  name: "Receives",
  properties: {
    _id: "string",
    description: "string",
    value: "double",
    type: "string",
    date: "string",
    created_at: "date",
  },
  primaryKey: "_id",
};
