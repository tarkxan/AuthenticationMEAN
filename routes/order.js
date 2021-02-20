const express = require('express')
const controller = require('../controllers/order')

// create and instance of a router
const router = express.Router()

router.get('/', controller.get_all_orders)
router.post('/', controller.create_order)

module.exports = router