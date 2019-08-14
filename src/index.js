const express = require('express')
require('dotenv').config()
const loaders = require('./loaders/index')

const config = require('./config/config.js')

const {
  PORT,
  HOST,
  MODE,
  DB_URL
} = config

const startServer = async () => {

  const app = express()

  await loaders.init(app)

  app.listen(PORT, err => {
    if (err) {
      console.log(err)
      return
    }
    console.log(``)
    console.log(`Connected to MongoDB on ${DB_URL}`)
    console.log(`Running in ${MODE} mode on http://${HOST}:${PORT}`)
  })

}

startServer()