import { User } from '$/domain/models'
import { ISnapshotUserTask } from '$/presentation/tasks'
import { ICreateUuidContract } from '../contracts'
import { ISnapshotUserRepo } from '../repos'

export class SnapshotUserTask implements ISnapshotUserTask {
  constructor(
    readonly createUuidContract: ICreateUuidContract,
    readonly snapshotUserRepo: ISnapshotUserRepo
  ) { }

  async snapshot(user: User.WithPassword, ctor: string): Promise<void> {
    await this.snapshotUserRepo.snapshot({
      ...user,
      _ctor: ctor,
      _sid: await this.createUuidContract.create(),
      _ttl: new Date()
    })
  }
}
