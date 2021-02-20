const { response } = require("express")

response_status = 200

module.exports.get_position_by_categ_id = (request, response) => {
    response.status(response_status).json({
        get_all_categories: 'from controller'
    })
}

module.exports.delete_position = (request, response) => {
    response.status(response_status).json({
        get_all_categories: 'from controller'
    })
}

module.exports.create_position = (request, response) => {
    response.status(response_status).json({
        get_category_by_id: 'from controller'
    })
}

module.exports.update_position = (request, response) => {
    response.status(response_status).json({
        get_category_by_id: 'from controller'
    })
}