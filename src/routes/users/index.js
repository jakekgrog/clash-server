const userRouter = require('express').Router();

// Middleware
const { passportLogin } = require('../../middleware/passport');

// Policies
const authenticationPolicy = require('../../policies/authenticationPolicy');

// Routes
const login = require('./login');
const register = require('./register');

userRouter.route('/login').post(
    authenticationPolicy.login,
    passportLogin,
    login
);

userRouter.route('/register').post(
    authenticationPolicy.register,
    register
)

module.exports = userRouter;