import winston from 'winston'
// import { ElasticsearchTransport } from 'winston-elasticsearch'

export const createLogger = (moduleName: string) => {
  const level = 'info'
  const logger = winston.createLogger({
    level,
    format: winston.format.json(),
    defaultMeta: { function: moduleName },
    transports: [new winston.transports.Console()]
    // transports: [new ElasticsearchTransport({ level })]
  })
  return logger
}
