const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const error_handler = require('../utils/error-handler');

response_status = 200

// login method
module.exports.login = async (request, response) => {

    // check if a user exists
    const user = await User.findOne({email: request.body.email})

    if (user) {
        const password_matches = bcrypt.compareSync(
            request.body.password,
            user.password)

        if (password_matches) {

            let expires_in = 3600 // 1 hour

            // create a token
            const token = jwt.sign(
                {
                    email: user.email,
                    user_id: user._id
                },
                keys.jwt,
                { expiresIn: expires_in })

            response.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            response.status(401).json({
                err_msg: 'Wrong password, try again.'
            })
        }
    } else {
        response.status(404).json({
            err_msg: `A user with the following email ${request.body.email} does not exist.
            You should sign up instead.`
        })
    }
}

// registration method
module.exports.register = async (request, response) => {

    // encrypt password
    const salt = bcrypt.genSaltSync(10)
    const password = request.body.password

    // check if a user exists
    const user_exists = await User.findOne({email: request.body.email})

    if (user_exists) {

        response.status(409).json({
            err_msg: `A user with the following email ${request.body.email} already exists`
        })
    } else {
        const new_user = new User({
            email: request.body.email,
            password: bcrypt.hashSync(password, salt) // password is hashed
        })

        try {
            await new_user.save()
            response.status(201).json(new_user)
        } catch(err) {
            error_handler(response, err)
        }
    } 
}