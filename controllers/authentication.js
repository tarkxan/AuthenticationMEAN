const { response } = require("express")

response_status = 200

// post method
module.exports.login = (request, response) => {
    response.status(response_status).json({
        // login_success: true
        login: 'from controller'
    })
}

// post method
module.exports.register = (request, response) => {
    response.status(response_status).json({
        register: 'from controller'
    })
}