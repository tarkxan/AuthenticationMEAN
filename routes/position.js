const express = require('express')
const controller = require('../controllers/position')

// create and instance of a router
const router = express.Router()

router.get('/:category_id', controller.get_position_by_categ_id)
router.post('/', controller.create_position)
router.patch('/:id', controller.update_position)
router.delete('/:id', controller.delete_position)

module.exports = router