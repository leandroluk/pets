import globalVars from '$/global-vars'
import { Collection, Db, MongoClient } from 'mongodb'

export const mongoHelper = {
  client: null as MongoClient,
  db: null as Db,

  async connect(): Promise<void> {
    this.client = new MongoClient(globalVars.db.mongo.href)
    await this.client.connect()
    const dbName = globalVars.db.mongo.pathname.slice(1)
    this.db = this.client.db(dbName)
  },

  async collection(collectionName: string): Promise<Collection> {
    return this.db.collection(collectionName)
  }
}
