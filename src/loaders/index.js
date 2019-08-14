const emojic = require('emojic'),
      colorIt = require('color-it')
      _ = require('lodash')

const expressLoader = require('./express').expressLoader
const mongooseLoader = require('./mongoose').mongooseLoader


const init = async (expressApp) => {

    console.log('Initializing MongoDB...')
    const mongoConnection = await mongooseLoader();
    console.log(
        colorIt(
            _.join([
                emojic.whiteCheckMark, 
                'MongoDB initialized!'
            ], ' '))
        .green()
        .toString()
    )


    console.log('Initializing Express...')
    await expressLoader(expressApp)
    console.log(
        colorIt(_.join([
                emojic.whiteCheckMark, 
                'Express initialized!'
            ], ' ')
        )
        .green()
        .toString()
    )
}

module.exports = {
    init
}