const userRouter = require('express').Router();

// Middleware
const { passportLogin } = require('../../middleware/passport');

// Policies
const authenticationPolicy = require('../../policies/authenticationPolicy');

// Routes
const login = require('./login');

userRouter.route('/login').post(
    authenticationPolicy.login,
    passportLogin,
    login
);

module.exports = userRouter;