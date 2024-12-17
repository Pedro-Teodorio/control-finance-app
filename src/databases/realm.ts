import Realm from 'realm';
import {UserSchema} from './schemas/UserSchema';
import { ReceivesSchema } from './schemas/ReceivesSchema';

export const getRealm = async () =>
  await Realm.open({
    path: 'finance-db',
    schema: [UserSchema,ReceivesSchema],
  });

