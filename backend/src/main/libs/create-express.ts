import express, { Express } from 'express'
import 'express-async-errors'
import helmet from 'helmet'
import { Logger } from 'winston'
import { corsMiddleware, makeLoggerMiddleware } from '../middlewares'

export const createExpress = (logger: Logger): Express => {
  const app = express()
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(makeLoggerMiddleware(logger))
  app.use(corsMiddleware)
  app.use(helmet())
  return app
}
