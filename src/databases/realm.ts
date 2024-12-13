import Realm from 'realm';
import {UserSchema} from './schemas/UserSchema';

export const getRealm = async () =>
  await Realm.open({
    path: 'Users',
    schema: [UserSchema],
  });

