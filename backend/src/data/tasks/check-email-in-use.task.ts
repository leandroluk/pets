import { ConflitError } from '$/errors'
import { ICheckEmailInUseTask } from '$/presentation/tasks'
import { IGetUserByEmailRepo } from '../repos'

export class CheckEmailInUseTask implements ICheckEmailInUseTask {
  constructor(
    readonly getUserByEmailRepo: IGetUserByEmailRepo
  ) { }

  async check(email: ICheckEmailInUseTask.Email): Promise<ICheckEmailInUseTask.Result> {
    const user = await this.getUserByEmailRepo.get(email)
    if (user) throw new ConflitError('"email" in use')
  }
}
