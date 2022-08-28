import { Snapshot } from '$/domain/generics'
import { User } from '$/domain/models'

export interface ISnapshotUserRepo {
  snapshot(data: ISnapshotUserRepo.Data): Promise<ISnapshotUserRepo.Result>
}
export namespace ISnapshotUserRepo {
  export type Data = Snapshot<User.WithPassword>
  export type Result = void
}
