const express = require('express')

const emojic = require('emojic'),
      colorIt = require('color-it')

const apiRouter = require('../routes/api');

const log = require('../logger/simpleLogger').out

const routerLoader = async (app) => {
    try{
        log([' Initializing routers...'])
        log(['  Initializing router...'])
        app.use('/api', apiRouter);
        log(['  router initialized successfully!'])

        return app
    } catch (err) {
        log([' ', emojic.x,' Failed to initialize routers!'],'RED')
        
        process.exit(1)
    }
}

module.exports = {
    routerLoader
}