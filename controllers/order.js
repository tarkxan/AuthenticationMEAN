const { response } = require("express")

response_status = 200
module.exports.get_all_orders = (request, response) => {
    response.status(response_status).json({
        get_all_categories: 'from controller'
    })
}

module.exports.create_order = (request, response) => {
    response.status(response_status).json({
        get_category_by_id: 'from controller'
    })
}