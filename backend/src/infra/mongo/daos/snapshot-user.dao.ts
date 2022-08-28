import { ISnapshotUserRepo } from '$/data/repos'
import { SNAPSHOT_USER_COLLECTION } from '../constants'
import { mongoHelper } from '../helper'

export class SnapshotUserDao implements ISnapshotUserRepo {
  async snapshot(data: ISnapshotUserRepo.Data): Promise<ISnapshotUserRepo.Result> {
    const collection = await mongoHelper.collection(SNAPSHOT_USER_COLLECTION)
    await collection.insertOne(data)
  }
}
