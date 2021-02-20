const { response } = require("express")

response_status = 200

// get method
module.exports.overview = (request, response) => {
    response.status(response_status).json({
        overview: 'from controller'
    })
}

// get method
module.exports.analytics = (request, response) => {
    response.status(response_status).json({
        analytics: 'from controller'
    })
}