import { AWSFunction } from '$/typings'
import serverless from 'serverless-http'
import app from './app'
import vars from './vars'

export const handler = serverless(app)

export const config: AWSFunction = {
  handler: `${vars.function.path}/index.handler`,
  events: [
    { httpApi: { method: '*', path: vars.function.name } },
    { httpApi: { method: '*', path: `${vars.function.name}/{proxy+}` } }
  ]
}
