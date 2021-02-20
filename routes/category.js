const express = require('express')
const controller = require('../controllers/category')

// create and instance of a router
const router = express.Router()

// routes
router.get('/', controller.get_all_categories)
router.get('/:id', controller.get_category_by_id)
router.delete('/:id', controller.delete_category)
router.post('/', controller.create_category)
router.patch('/:id', controller.update_category)

module.exports = router