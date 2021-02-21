response_status = 200

// get all category positions
module.exports.get_position_by_categ_id = (request, response) => {
    response.status(response_status).json({
        get_position_by_categ_id: 'from controller'
    })
}

// deletye a position
module.exports.delete_position = (request, response) => {
    response.status(response_status).json({
        delete_position: 'from controller'
    })
}

// create a position
module.exports.create_position = (request, response) => {
    response.status(response_status).json({
        create_position: 'from controller'
    })
}

// update a position
module.exports.update_position = (request, response) => {
    response.status(response_status).json({
        update_position: 'from controller'
    })
}