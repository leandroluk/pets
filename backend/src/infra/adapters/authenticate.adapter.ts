import { IAuthenticateContract } from '$/data/contracts'
import { BearerAuthentication } from '$/domain/generics'
import jwt from 'jsonwebtoken'

export class AuthenticateAdapter implements IAuthenticateContract {
  constructor(
    readonly secret: string,
    readonly expiresIn: number
  ) { }

  async auth(data: IAuthenticateContract.Data): Promise<BearerAuthentication> {
    const accessToken = jwt.sign({ data }, this.secret, { expiresIn: this.expiresIn })
    return {
      type: 'Bearer',
      accessToken,
      expiresIn: this.expiresIn
    }
  }
}
