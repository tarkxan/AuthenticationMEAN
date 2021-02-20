// add express from node_modules
const { response } = require('express')
const express = require('express')

// import authenrication
const auth_routes = require('./routes/authentication')
const analytics_routes = require('./routes/analytics')
const category_routes = require('./routes/category')
const order_routes = require('./routes/order')
const position_routes = require('./routes/position')

// add instance pf a server
const app = express()

// auth_routes has '/login', that's why full path will be '/api/auth/login
app.use('/api/auth', auth_routes)
app.use('/api/analytics', analytics_routes)
app.use('/api/category', category_routes)
app.use('/api/order', order_routes)
app.use('/api/position', position_routes)

let success_code = 200
let root_dir = '/'
let success_message = 'Working'

module.exports = app