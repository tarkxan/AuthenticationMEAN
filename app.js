// add express from node_modules
const express = require('express')

// to parse input in json format
const body_parser = require('body-parser')

// import routes
const auth_routes = require('./routes/authentication')
const analytics_routes = require('./routes/analytics')
const category_routes = require('./routes/category')
const order_routes = require('./routes/order')
const position_routes = require('./routes/position')

// add instance of a server
const app = express()

// plugins to read json
app.use(body_parser.urlencoded({extended: true}))
app.use(body_parser.json())

// auth_routes has '/login', that's why full path will be '/api/auth/login
app.use('/api/auth', auth_routes)
app.use('/api/analytics', analytics_routes)
app.use('/api/category', category_routes)
app.use('/api/order', order_routes)
app.use('/api/position', position_routes)

module.exports = app