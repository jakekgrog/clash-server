const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const emojic = require('emojic'),
      colorIt = require('color-it')
const _ = require('lodash')

const expressLoader = async (app) => {
    try{
        app.get('/status', (req, res) => { res.status(200).end(); });
        app.head('/status', (req, res) => { res.status(200).end(); });

        console.log(' Initializing express middleware...')
        console.log('  Initializing cors...')
        app.use(cors());
        console.log('  cors initialized successfully!')
        
        console.log('  Initializing body-parser...')
        app.use(bodyParser.urlencoded({ extended: true }));
        console.log('  body-parser initialized successfully!')
        console.log(
            colorIt(_.join([' ', emojic.whiteCheckMark,' Express middleware initialized!'],''))
                .green()
                .toString()
            )

        return app
    } catch (err) {
        console.log(
            colorIt(_.join([' ', emojic.x,' Express middleware initialization failed!','\n', 'This could be caused by any of the middleware'],''))
            .red()
            .toString()
        )
        process.exit(1)
    }
}

module.exports = {
    expressLoader
}