import { User } from '$/domain/models'

export interface ICheckEmailInUseTask {
  check(email: ICheckEmailInUseTask.Email): Promise<ICheckEmailInUseTask.Result>
}
export namespace ICheckEmailInUseTask {
  export type Email = User['email']
  export type Result = void
}
