const User = require('../../models/user');
const passport = require('../../auth/passport');
const jwt = require('jsonwebtoken');
const keys = require('../../keys/keys');

const signToken = (user) => {
    return jwt.sign({
        sub: user.id,
        iat: new Date().getTime()
    }, keys.JWT_SECRET);
}

module.exports = async (req, res, next) => {
    const { username, email, password } = req.body;

    // Check user email doesn't exist
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(403).json({
            status: false,
            errors: [{ message: "Email already registered" }]
        });
    }

    const newUser = new User({ username, email, password });
    const user = await newUser.save();

    const token = signToken(newUser);

    res.send({
        status: true,
        message: "Account created successfully!",
        token
    })
}