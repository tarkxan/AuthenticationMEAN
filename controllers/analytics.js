response_status = 200

// get analytics overview method
module.exports.overview = (request, response) => {
    response.status(response_status).json({
        overview: 'from controller'
    })
}

// get analytics overview
module.exports.analytics = (request, response) => {
    response.status(response_status).json({
        analytics: 'from controller'
    })
}