const emojic = require('emojic'),
      colorIt = require('color-it')
      _ = require('lodash')

const expressLoader = require('./express').expressLoader
const mongooseLoader = require('./mongoose').mongooseLoader
const log = require('../logger/simpleLogger').out


const init = async (expressApp) => {

    log(['Initializing MongoDB...'])
    const mongoConnection = await mongooseLoader();
    log([emojic.whiteCheckMark, 'MongoDB initialized!'], 'GREEN')


    log(['Initializing Express...'])
    await expressLoader(expressApp)
    log([emojic.whiteCheckMark, 'Express initialized!'], 'GREEN')

    log([emojic.whiteCheckMark, 'Application initialized successfully!', 'Enjoy', emojic.smiley], 'GREEN')
}

module.exports = {
    init
}