const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const { ExtractJwt } = require('passport-jwt');

const keys = require('../keys/keys');
const User = require('../models/user');

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: keys.JWT_SECRET
}, async (payload, done) => {
    try {
        const user = await User.findOne({id: payload.sub});

        if (!user) {
            done(null, false, generateResponse(false, "unauthorized"));
        } else {
            done(null, false, generateResponse(true, "success", user));
        }
    } catch (err) {
        done(err, generateResponse(false, "something went wrong"));
    }
}));

passport.use(new LocalStrategy({
    usernameField: 'email'
  }, async (email, password, done) => {
    try {
      // Find the user given the email
      const user = await User.findOne({ email }).select('+password');

      // If not, handle it
      if (!user) {
        return done(null, false, { status: false, errors: [{message: "Credentials are incorrect, try a different email or password"}] });
      }
    
      // Check if the password is correct
      const isMatch = await user.verifyPassword(password);

      // If not, handle it
      if (!isMatch) {
        return done(null, false, { status: false, errors: [{message: "Credentials are incorrect, try a different email or password"}] });
      }
      user.password = undefined;
      // Otherwise, return the user
      return done(null, user);
      } catch(error) {
        done(error, false);
      }
  }));

const generateResponse = (isSuccess, message, user) => {
    if (!isSuccess) {
        return {
            status: isSuccess,
            message: message,
        }
    }
    return {
        status: isSuccess,
        message: message,
        user: user
    }
}