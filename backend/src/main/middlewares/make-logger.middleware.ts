import { RequestHandler } from 'express'
import expressWinston from 'express-winston'
import { Logger } from 'winston'

export const makeLoggerMiddleware = (winstonInstance: Logger): RequestHandler => {
  return expressWinston.logger({ winstonInstance })
}
