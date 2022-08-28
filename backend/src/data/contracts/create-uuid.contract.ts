export interface ICreateUuidContract {
  create(): Promise<ICreateUuidContract.Result>
}
export namespace ICreateUuidContract {
  export type Result = string
}
