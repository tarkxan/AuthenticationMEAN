const express = require('express')
const controller = require('../controllers/authentication')

// create and instance of a router
const router = express.Router()


// if auth_path = 'localhost:5000/api/auth/login' - pass function login of instance controller
let login_path = '/login'
router.post(login_path, controller.login)

// if auth_path = 'localhost:5000/api/auth/login' - pass function register of instance controller
let register_path = '/register'
router.post(register_path, controller.register)



module.exports = router