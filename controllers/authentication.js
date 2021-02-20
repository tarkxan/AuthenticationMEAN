response_status = 200

// post login method
module.exports.login = (request, response) => {
    response.status(response_status).json({
        login: request.body
        // email: req.body.email,
        // password: req.body.password
    })
}

// post regirter method
module.exports.register = (request, response) => {
    response.status(response_status).json({
        register: 'from controller'
    })
}