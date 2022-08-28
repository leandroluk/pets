import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { Logger } from 'winston'

export const errorsMap = {
  ValidationError: 400,
  NotFoundError: 404,
  ConflitError: 409
} as const

export const makeErrorHandlerMiddleware = (logger: Logger): ErrorRequestHandler => {
  return (err: Error, _req: Request, res: Response, _next: NextFunction) => {
    const { name, message, ...rest } = err
    const status = errorsMap[name]
    if (status) return res.status(status).json({ message })
    logger.error(name, { ...rest, message })
    res.sendStatus(500)
  }
}
