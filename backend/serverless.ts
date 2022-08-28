import type { AWS } from '@serverless/typescript'
import fs from 'fs'
import path from 'path'
import packageJson from './package.json'

const functionsPath = path.resolve('src', 'main', 'functions')
const functions = fs
  .readdirSync(functionsPath)
  .reduce((map, name) => {
    map[name] = require(path.resolve(functionsPath, name)).config
    return map
  }, {} as AWS['functions'])

const serverlessConfiguration: AWS = {
  service: packageJson.name,
  frameworkVersion: '3',
  plugins: [
    'serverless-esbuild',
    'serverless-offline'
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000'
    }
  },
  // import the function via paths
  functions,
  package: { individually: true },
  custom: {
    /* https://www.serverless.com/plugins/serverless-offline */
    'serverless-offline': {
      host: '0.0.0.0',
      httpPort: 3001,
      noPrependStageInUrl: true
    },
    /* https://www.serverless.com/plugins/serverless-offline */
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10
    }
  }
}

module.exports = serverlessConfiguration
