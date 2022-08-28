import { IGetUserByEmailRepo } from '$/data/repos'
import { User } from '$/domain/models'
import { USER_COLLECTION } from '../constants'
import { mongoHelper } from '../helper'

export class GetUserByEmailDao implements IGetUserByEmailRepo {
  async get(email: string): Promise<User.WithPassword> {
    const collection = await mongoHelper.collection(USER_COLLECTION)
    const doc = await collection.findOne({ email })
    return {
      _uid: doc._uid,
      _created: doc._created,
      _deleted: doc._deleted,
      _updated: doc._updated,
      displayName: doc.displayName,
      email: doc.email,
      password: doc.password,
      photoURL: doc.photoURL
    }
  }
}
