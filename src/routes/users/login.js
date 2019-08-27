const passport = require('../../auth/passport');
const jwt = require('jsonwebtoken');
const keys = require('../../keys/keys');

const signJwtToken = user => {
    return jwt.sign({
        sub: user.id,
        iat: new Date().getTime()
    }, keys.JWT_SECRET);
}

module.exports = async (req, res, next) => {
    const jwtToken = signJwtToken(req.user);
    res.send({
        status: true,
        message: "success",
        jwtToken
    })
}