const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const emojic = require('emojic'),
      colorIt = require('color-it')
const _ = require('lodash')

const log = require('../logger/simpleLogger').out

const expressLoader = async (app) => {
    try{
        app.get('/status', (req, res) => { res.status(200).end(); });
        app.head('/status', (req, res) => { res.status(200).end(); });

        log([' Initializing express middleware...'])
        log(['  Initializing cors...'])
        app.use(cors());
        log(['  cors initialized successfully!'])
        
        log(['  Initializing body-parser...'])
        app.use(bodyParser.urlencoded({ extended: true }));
        log(['  body-parser initialized successfully!'])
        log([' ', emojic.whiteCheckMark, ' Express middleware initialized!'],'GREEN')

        return app
    } catch (err) {
        log([' ', emojic.x,' Express middleware initialization failed!','\n', 'This could be caused by any of the middleware'],'RED')
        
        process.exit(1)
    }
}

module.exports = {
    expressLoader
}