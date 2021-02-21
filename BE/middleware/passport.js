const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const keys = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model('users') // get schema for user

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.jwt
}

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            
            try {
                // get user email by user_id fetched from a token provided in payload
                const fetched_user = await (await User.findById(payload.user_id)).isSelected('email id')
                console.log('fetched_user:', fetched_user)

                err = null

                // if a user found in a db
                if (fetched_user) {
                    done(err, fetched_user)
                } else {
                    done(err, false)
                }
            } catch (err) {
                console.log(`Failed to find a user: ${err}`)
            }
        })
    )
}