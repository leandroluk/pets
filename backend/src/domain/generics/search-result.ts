export type SearchResult<T> = {
  items: Array<Partial<T>>
  total: number
  limit: number
  offset: number
}
