response_status = 200

// get a list of categories
module.exports.get_all_categories = (request, response) => {
    response.status(response_status).json({
        get_all_categories: 'from controller'
    })
}

// get category by id
module.exports.get_category_by_id = (request, response) => {
    response.status(response_status).json({
        get_category_by_id: 'from controller'
    })
}

// delete a category
module.exports.delete_category = (request, response) => {
    response.status(response_status).json({
        delete_category: 'from controller'
    })
}

// create a new category
module.exports.create_category = (request, response) => {
    response.status(response_status).json({
        create_category: 'from controller'
    })
}

// update a category
module.exports.update_category = (request, response) => {
    response.status(response_status).json({
        update_category: 'from controller'
    })
}