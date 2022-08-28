module.exports = {
  mongodbMemoryServerOptions: {
    binary: {
      version: '4.4.13',
      skipMD5: true
    },
    instance: {
      dbName: 'jest'
    }
  },
  mongoURLEnvName: 'MONGO_URL'
}
