import { BearerAuthentication, Entity } from '../generics'
import { User } from '../models'

export interface ISignUpCase {
  signIn(data: ISignUpCase.Data): Promise<ISignUpCase.Result>
}
export namespace ISignUpCase {
  export type Data = Omit<User.WithPassword, keyof Entity>
  export type Result = BearerAuthentication
}