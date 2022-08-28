import type { Request } from 'express'
import type { Schema } from 'joi'

export const validateRequest = async<T>(schema: Schema<T>, req: Request): Promise<T> => {
  const { params, query, headers, body } = req
  const result = await schema
    .options({ stripUnknown: true })
    .validateAsync({ params, query, headers, body })
  return result as T
}
