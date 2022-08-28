import { ISignUpCase } from '$/domain/cases'
import { IAddUserTask, IAuthUserTask, ICheckEmailInUseTask, ISnapshotUserTask } from '../tasks'

export class SignUpCase implements ISignUpCase {
  constructor(
    readonly checkEmailInUseTask: ICheckEmailInUseTask,
    readonly addUserTask: IAddUserTask,
    readonly snapshotUserTask: ISnapshotUserTask,
    readonly authUserTask: IAuthUserTask
  ) { }

  async signIn(data: ISignUpCase.Data): Promise<ISignUpCase.Result> {
    await this.checkEmailInUseTask.check(data.email)
    const user = await this.addUserTask.add(data)
    this.snapshotUserTask.snapshot(user, user._uid)
    const authorization = await this.authUserTask.auth(user)
    return authorization
  }
}
