
const env = process.env.NODE_ENV

const development = {
  PORT: parseInt(process.env.DEVELOPMENT_APP_PORT) || 3000,
  HOST: 'localhost',
  MODE: env
}
const production = {
  PORT: parseInt(process.env.PRODUCTION_APP_PORT) || 3000,
  HOST: 'localhost',
  MODE: env
}

const config = {
 development,
 production
}

module.exports = config[env]