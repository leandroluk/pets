import { Entity } from '../generics'

export type User = Entity & {
  displayName: string
  email: string
  photoURL: string
}
export namespace User {
  export type WithPassword = User & {
    password: string
  }
}
