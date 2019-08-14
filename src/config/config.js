
const env = process.env.NODE_ENV

const development = {
  PORT: parseInt(process.env.DEVELOPMENT_APP_PORT) || 3000,
  HOST: 'localhost',
  MODE: env,
  DB_URL: process.env.DATABASE_URL || ''
}
const production = {
  PORT: parseInt(process.env.PRODUCTION_APP_PORT) || 3000,
  HOST: 'localhost',
  MODE: env,
  DB_URL: process.env.DATABASE_URL || ''
}

const config = {
 development,
 production
}

module.exports = config[env]