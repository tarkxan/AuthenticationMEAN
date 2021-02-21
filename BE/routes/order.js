const express = require('express')
const controller = require('../controllers/order')

// create and instance of a router
const router = express.Router()

const passport = require('passport')

// if auth_path = 'http://localhost:5000/api/order/..' - pass functions controller...
router.get('/', passport.authenticate('jwt', {session: false}), controller.get_all_orders)
router.post('/', passport.authenticate('jwt', {session: false}), controller.create_order)

module.exports = router