const express = require('express')
const controller = require('../controllers/analytics')

// create and instance of a router
const router = express.Router()

const passport = require('passport')

// if auth_path = 'http://localhost:5000/api/analytics/..' - pass functions controller.overview or controller.analytics
router.get('/overview', passport.authenticate('jwt', {session: false}), controller.overview)
router.get('/', passport.authenticate('jwt', {session: false}), controller.analytics)

module.exports = router