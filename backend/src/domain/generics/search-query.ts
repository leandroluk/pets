import { Unique } from './unique'

export type SearchQuery<T extends Unique> = {
  where?: SearchQuery.Where<T>
  fields?: SearchQuery.Fields<T>
  sort?: SearchQuery.Sort<T>
  limit?: number
  offset?: number
}
export namespace SearchQuery {
  export type PositiveMatchOps = 'eq' | 'lt' | 'lte' | 'gt' | 'gte' | 'rx'
  export type PositiveRangeOps = 'in'
  export type MatchOps = PositiveMatchOps | `n${PositiveMatchOps}`
  export type RangeOps = PositiveRangeOps | `n${PositiveRangeOps}`
  export type Where<T extends Unique> =
    | { [K in keyof T as `${string & K}__${MatchOps}`]?: T[K] }
    | { [K in keyof T as `${string & K}__${RangeOps}`]?: Array<T[K]> }
  export type Fields<T extends Unique> = { [K in keyof T]?: 0 | 1 }
  export type Sort<T extends Unique> = { [K in keyof T]?: -1 | 1 }
}
