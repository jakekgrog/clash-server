const {check} = require('express-validator')
const policyHandler = require('./policyManager')

const policies = {
    register: [
        check('email')
            .not()
            .isEmpty()
            .withMessage('Email is required')
            .isEmail()
            .withMessage('Valid email is required'),
        check('username')
            .not()
            .isEmpty()
            .withMessage('Username required')
            .isLength({ min: 3, max: 30 })
            .withMessage('Username must be between 3 and 30 characters')
            .not()
            .contains('@')
            .withMessage('Username cannot contain @')
            .not()
            .contains('!')
            .withMessage('Username cannot contain !'),
        check('password')
            .not()
            .isEmpty()
            .withMessage('Password required')
            .isLength({ min: 3 })
            .withMessage('Password must be at least 3 characters long'),
        policyHandler
    ],
    login: [
        check('email')
            .not()
            .isEmpty()
            .withMessage('Email is required'),
        check('password')
            .not()
            .isEmpty()
            .withMessage('Password required'),
        policyHandler
    ]
}

module.exports = policies;