import { BearerAuthentication } from '$/domain/generics'
import { User } from '$/domain/models'

export interface IAuthUserTask {
  auth(data: IAuthUserTask.Data): Promise<IAuthUserTask.Result>
}
export namespace IAuthUserTask {
  export type Data = User
  export type Result = BearerAuthentication
}
