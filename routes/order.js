const express = require('express')
const controller = require('../controllers/order')

// create and instance of a router
const router = express.Router()

// if auth_path = 'http://localhost:5000/api/order/..' - pass functions controller...
router.get('/', controller.get_all_orders)
router.post('/', controller.create_order)

module.exports = router