const express = require('express')
require('dotenv').config()
const loaders = require('./loaders/index')
const emojic = require('emojic'),
      colorIt = require('color-it')

const config = require('./config/config.js')

const {
  PORT,
  HOST,
  MODE
} = config

const startServer = async () => {

  const app = express()

  await loaders.init(app)
  console.log(colorIt(_.join([emojic.whiteCheckMark,'Application initialized successfully!', 'Enjoy', emojic.smiley],' ')).green().toString())

  app.listen(PORT, err => {
    if (err) {
      console.log(err)
      return
    }
    console.log(`Running in ${MODE} mode on http://${HOST}:${PORT}`)
  })

}

startServer()