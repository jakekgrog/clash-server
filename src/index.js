const express = require('express')
const config = require('./config/config.js')

const {
  PORT,
  HOST,
  MODE
} = config

const app = express()

app.get('/', function (req, res) {
  res.send('Alive');
})

app.listen(PORT, function () {
  console.log(`Running in ${MODE} mode on http://${HOST}:${PORT}`)
})