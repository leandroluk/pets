import { ISignUpCase } from '$/domain/cases'
import { ValidationError } from '$/errors'
import Joi from 'joi'
import { PASSWORD_MESSAGE, PASSWORD_REGEX } from './constants'

export const signUpSchema = Joi.object<{
  body: ISignUpCase.Data
}>({
  body: Joi.object<ISignUpCase.Data>({
    displayName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().pattern(PASSWORD_REGEX).error(new ValidationError(PASSWORD_MESSAGE))
  }).required()
})
