import { User } from '$/domain/models'
import { IAddUserTask } from '$/presentation/tasks'
import { ICreateUuidContract } from '../contracts'
import { IAddUserRepo } from '../repos'

export class AddUserTask implements IAddUserTask {
  constructor(
    readonly createUuidContract: ICreateUuidContract,
    readonly addUserRepo: IAddUserRepo
  ) { }

  async add(data: IAddUserTask.Data): Promise<User.WithPassword> {
    const user: IAddUserRepo.Data = {
      ...data,
      _uid: await this.createUuidContract.create(),
      _created: new Date()
    }
    await this.addUserRepo.add(user)
    return user
  }
}
