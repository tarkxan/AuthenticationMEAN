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

const mongoose = require('mongoose')
const passport = require('passport')

// add instance of a server
const app = express()

// connect to mongo db
const keys = require('./config/keys')
mongoose.connect(keys.mongo_uri)
    .then(() => {
        console.log('MongoDB connected successfully')
    })
    .catch(error => console.log(`MongoDB connection failed: ${error}`))

// let app know it should work with passport
app.use(passport.initialize())
// call middleware
require('./middleware/passport')(passport)

// plugins to read json
app.use(require('morgan')('dev')) // same as const morgan = require('morgan') --> app.use(morgan('dev'))
app.use(body_parser.urlencoded({extended: true}))
app.use(body_parser.json())
app.use(require('cors')())

// auth_routes has '/login', that's why full path will be '/api/auth/login
app.use('/api/auth', auth_routes)
app.use('/api/analytics', analytics_routes)
app.use('/api/category', category_routes)
app.use('/api/order', order_routes)
app.use('/api/position', position_routes)

module.exports = app