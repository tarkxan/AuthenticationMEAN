const { response } = require("express")

response_status = 200
module.exports.get_all_categories = (request, response) => {
    response.status(response_status).json({
        get_all_categories: 'from controller'
    })
}

module.exports.get_category_by_id = (request, response) => {
    response.status(response_status).json({
        get_category_by_id: 'from controller'
    })
}

module.exports.delete_category = (request, response) => {
    response.status(response_status).json({
        get_all_categories: 'from controller'
    })
}

module.exports.create_category = (request, response) => {
    response.status(response_status).json({
        get_category_by_id: 'from controller'
    })
}

module.exports.update_category = (request, response) => {
    response.status(response_status).json({
        get_category_by_id: 'from controller'
    })
}