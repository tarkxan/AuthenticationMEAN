response_status = 200

// get all orders
module.exports.get_all_orders = (request, response) => {
    response.status(response_status).json({
        get_all_orders: 'from controller'
    })
}

// create a new order
module.exports.create_order = (request, response) => {
    response.status(response_status).json({
        create_order: 'from controller'
    })
}