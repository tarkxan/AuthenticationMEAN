const express = require('express')
const controller = require('../controllers/position')

// create and instance of a router
const router = express.Router()

const passport = require('passport')

router.get('/:category_id', passport.authenticate('jwt', {session: false}), controller.get_position_by_categ_id)
router.post('/', passport.authenticate('jwt', {session: false}), controller.create_position)
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update_position)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.delete_position)

module.exports = router