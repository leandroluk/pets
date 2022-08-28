import { IAuthUserTask } from '$/presentation/tasks'
import { IAuthenticateContract } from '../contracts'

export class AuthUserTask implements IAuthUserTask {
  constructor(
    readonly authenticateContract: IAuthenticateContract
  ) { }

  async auth(data: IAuthUserTask.Data): Promise<IAuthUserTask.Result> {
    const authentication = await this.authenticateContract.auth({
      _uid: data._uid,
      displayName: data.displayName,
      email: data.email,
      photoURL: data.photoURL
    })
    return authentication
  }
}
