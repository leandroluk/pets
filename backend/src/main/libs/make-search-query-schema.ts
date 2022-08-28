import { Unique } from '$/domain/generics'
import { SearchQuery } from '$/domain/generics/search-query'
import globalVars from '$/global-vars'
import Joi, { Schema } from 'joi'

const ops = {
  match: ['eq', 'lt', 'lte', 'gt', 'gte', 'rx'],
  range: ['in']
}

const makeWhereSchema = <T extends Unique>(
  keySchemaMap: Record<keyof T, Schema>
): Schema<Record<keyof SearchQuery.Where<T>, Schema>> => {
  const obj = {} as Record<keyof T, Schema>
  for (const [key, schema] of Object.entries(keySchemaMap)) {
    for (const match of ops.match) {
      obj[`${key}__${match}`] = schema
      obj[`${key}__n${match}`] = schema
    }
    for (const range of ops.range) {
      const arrSchema = Joi.array().min(1).items(schema)
      obj[`${key}__${range}`] = arrSchema
      obj[`${key}__n${range}`] = arrSchema
    }
  }
  return Joi.object(obj).min(1)
}

const makeSortSchema = <T extends Unique>(keys: string[]): Schema => {
  const obj = {} as Record<keyof T, Schema>
  for (const key of keys) obj[key] = Joi.number().valid(-1, 1)
  return Joi.object(obj).min(1)
}

const makeFieldsSchema = <T extends Unique>(keys: string[]): Schema => {
  const obj = {} as Record<keyof T, Schema>
  for (const key of keys) obj[key] = Joi.number().valid(0, 1)
  return Joi.object(obj).min(1)
}

export const makeSearchQuerySchema = <T extends Unique, U = SearchQuery.Where<T>>(
  keySchemaMap: Record<keyof T, Schema>
): Schema<{ body: Schema<U> }> => {
  const keys = Object.keys(keySchemaMap)

  return Joi.object<{ body: Schema<U> }>({
    body: Joi.object<SearchQuery<T>>({
      where: makeWhereSchema<T>(keySchemaMap),
      fields: makeFieldsSchema<T>(keys),
      sort: makeSortSchema<T>(keys),
      limit: Joi.number().positive().default(globalVars.db.limit),
      offset: Joi.number().min(0).default(0)
    })
  }).min(1)
}
