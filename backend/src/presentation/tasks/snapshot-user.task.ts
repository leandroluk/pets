import { User } from '$/domain/models'

export interface ISnapshotUserTask {
  snapshot(
    user: ISnapshotUserTask.Data,
    ctor: ISnapshotUserTask.Ctor
  ): Promise<ISnapshotUserTask.Result>
}
export namespace ISnapshotUserTask {
  export type Data = User.WithPassword
  export type Ctor = User['_uid']
  export type Result = void
}
