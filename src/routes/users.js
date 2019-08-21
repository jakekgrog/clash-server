var express = require('express')
var router = express.Router()

router.get('/login', (req, res, next) => {
    res.status(200).json({message: 'alive'})
})

router.get('/register', (req, res, next) => {
    res.status(200).json({message: 'alive'})
})

module.exports = router