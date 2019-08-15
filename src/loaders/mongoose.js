const mongoose = require('mongoose')

const emojic = require('emojic'),
      colorIt = require('color-it')
      _ = require('lodash')

const config = require('../config/config.js')
const log = require('../logger/simpleLogger').out

const {
    DB_URL
} = config

const mongooseLoader = async () => {
  try{
    const connection = await mongoose.connect(DB_URL, { useNewUrlParser: true })
    return connection.connection.db
  } catch (err) {
    log([emojic.x, 'MongoDB initialization failed!', '\n', 'Make sure you\'re connecting to the correct database!'],'RED')
    process.exit(1)
  }
  
}

module.exports = {
    mongooseLoader
}