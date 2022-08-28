import { BearerAuthentication } from '$/domain/generics'
import { User } from '$/domain/models'

export interface IAuthenticateContract {
  auth(data: IAuthenticateContract.Data): Promise<IAuthenticateContract.Result>
}
export namespace IAuthenticateContract {
  export type Data = Pick<User, '_uid' | 'email' | 'displayName' | 'photoURL'>
  export type Result = BearerAuthentication
}
