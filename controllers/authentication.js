response_status = 200

// post login method
module.exports.login = (request, response) => {
    response.status(response_status).json({
        login: {
            email: request.body.email,
            password: request.body.password
        }
    })
}

// post regirter method
module.exports.register = (request, response) => {
    response.status(response_status).json({
        login: {
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            email: request.body.email,
            password: request.body.password
        }
    })
}