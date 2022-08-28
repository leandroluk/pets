import packageJson from 'package.json'
const { env, cwd } = process

const globalVars = {
  app: {
    path: cwd(),
    name: packageJson.name,
    port: Number(env.APP_PORT || 3000)
  },
  db: {
    mongo: new URL(env.DB_MONGO || 'mongodb://localhost:27017/db'),
    limit: Number(env.DB_LIMIT || 50)
  },
  jwt: {
    secret: env.JWT_SECRET || 'secret',
    expires: Number(env.JWT_EXPIRES || 60 * 60 * 24 * 14) // default 14 days
  },
  cors: {
    origin: env.CORS_ORIGIN || '*',
    methods: env.CORS_METHOD || '*',
    headers: env.CORS_HEADERS || '*'
  }
} as const

export default globalVars
