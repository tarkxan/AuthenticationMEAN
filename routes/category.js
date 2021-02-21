const express = require('express')
const controller = require('../controllers/category')

// create and instance of a router
const router = express.Router()

const passport = require('passport')

// if auth_path = 'http://localhost:5000/api/category/..' - pass functions controller...
router.get('/', passport.authenticate('jwt', {session: false}), controller.get_all_categories)
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.get_category_by_id)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.delete_category)
router.post('/', passport.authenticate('jwt', {session: false}), controller.create_category)
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update_category)

module.exports = router