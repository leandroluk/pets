import { Entity } from './entity'

export type Snapshot<T extends Entity> = T & {
  _ctor: string
  _sid: string
  _ttl: Date
}