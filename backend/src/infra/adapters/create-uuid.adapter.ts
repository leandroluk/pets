import { ICreateUuidContract } from '$/data/contracts'
import crypto from 'crypto'

export class CreateUuidAdapter implements ICreateUuidContract {
  async create(): Promise<string> {
    return crypto.randomUUID()
  }
}
