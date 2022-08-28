import { User } from '$/domain/models'

export interface IAddUserRepo {
  add(data: IAddUserRepo.Data): Promise<IAddUserRepo.Result>
}
export namespace IAddUserRepo {
  export type Data = User.WithPassword
  export type Result = void
}
