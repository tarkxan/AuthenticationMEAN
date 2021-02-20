const express = require('express')
const controller = require('../controllers/analytics')

// create and instance of a router
const router = express.Router()

// if auth_path = 'http://localhost:5000/api/analytics/..' - pass functions controller.overview or controller.analytics
router.get('/overview', controller.overview)
router.get('/', controller.analytics)

module.exports = router