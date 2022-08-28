import { IAddUserRepo } from '$/data/repos'
import { USER_COLLECTION } from '../constants'
import { mongoHelper } from '../helper'

export class AddUserDao implements IAddUserRepo {
  async add(data: IAddUserRepo.Data): Promise<IAddUserRepo.Result> {
    const collection = await mongoHelper.collection(USER_COLLECTION)
    await collection.insertOne(data)
  }
}
