const express = require('express')
const controller = require('../controllers/authentication')

// create and instance of a router
const router = express.Router()

// if auth_path = 'localhost:5000/api/auth/..' - pass functions controller.login or controller.register
router.post('/login', controller.login)
router.post('/register', controller.register)


module.exports = router