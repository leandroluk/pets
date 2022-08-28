import { Entity } from '$/domain/generics'
import { User } from '$/domain/models'

export interface IAddUserTask {
  add(data: IAddUserTask.Data): Promise<IAddUserTask.Result>
}
export namespace IAddUserTask {
  export type Data = Omit<User.WithPassword, keyof Entity>
  export type Result = User.WithPassword
}
