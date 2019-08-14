const mongoose = require('mongoose')

const emojic = require('emojic'),
      colorIt = require('color-it')
      _ = require('lodash')

const mongooseLoader = async () => {
  try{
    const connection = await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
    return connection.connection.db
  } catch (err) {
    console.log(
        colorIt(_.join([emojic.x, 'MongoDB initialization failed!', '\n', 'Make sure you\'re connecting to the correct database!'], ' '))
        .red()
        .toString()
    )
    process.exit(1)
  }
  
}

module.exports = {
    mongooseLoader
}