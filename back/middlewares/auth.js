//jwt 검증 미들웨어
const passport = require('passport');

module.exports = passport.authenticate('jwt', { session: false });