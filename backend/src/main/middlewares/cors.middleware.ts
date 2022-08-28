import globalVars from '$/global-vars'
import { RequestHandler } from 'express'

export const corsMiddleware: RequestHandler = (_req, res, next) => {
  res.setHeader('access-control-allow-origin', globalVars.cors.origin)
  res.setHeader('access-control-allow-methods', globalVars.cors.methods)
  res.setHeader('access-control-allow-headers', globalVars.cors.headers)
  next()
}
