const passport = require('passport')

const passportLogin = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (!user) {
            res.status(401).json(info);
        } else {
            req.user = user
            next()
        }
    })(req, res, next)
}

const passportJwt = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (error, decryptToken, jwtError) => {
        if (typeof(jwtError) === 'object') {
            res.status(401).json({
                status: false,
                message: jwtError.message
            })
        } else if (!error) {
            if (decryptToken.status === false) {
                res.status(401).json({
                    status: false,
                    message: decryptToken.message
                })
            }
            req.user = decryptToken
            req.session['user'] = decryptToken
            next()
        }
    })(req, res, next)
}

module.exports = {
    passportLogin,
    passportJwt
}