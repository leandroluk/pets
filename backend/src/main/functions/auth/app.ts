import { mongoHelper } from '$/infra/mongo/helper'
import { makeSignUp } from '$/main/factories'
import { createExpress, validateRequest } from '$/main/libs'
import { makeErrorHandlerMiddleware } from '$/main/middlewares'
import logger from './logger'
import { signUpSchema } from './schemas'
import vars from './vars'

const app = createExpress(logger)

// postSignUp
app.post(`${vars.function.name}/sign-up`, async (req, res) => {
  const { body } = await validateRequest(signUpSchema, req)
  await mongoHelper.connect()
  const result = makeSignUp().signIn(body)
  res.status(201).json(result)
})

app.use(makeErrorHandlerMiddleware(logger))

export default app
