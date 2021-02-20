const express = require('express')
const controller = require('../controllers/analytics')

// create and instance of a router
const router = express.Router()

// if auth_path = 'localhost:5000/api/auth/login' - pass function login of instance controller
let login_path = '/overview'
router.get(login_path, controller.overview)

// if auth_path = 'localhost:5000/api/auth/login' - pass function register of instance controller
let register_path = '/analytics'
router.get(register_path, controller.analytics)

module.exports = router