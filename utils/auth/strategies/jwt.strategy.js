const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const jwtStrategy = new JwtStrategy(options, (payload, done) => {
  if (Date.now() > payload.exp * 1000) {
    return done(boom.unauthorized('Token expired'));
  }
  return done(null, payload);
});

module.exports = jwtStrategy;
