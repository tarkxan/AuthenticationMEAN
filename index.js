
// add express from node_modules
const express = require('express')

// add instance pf a server
const app = express()

let success_code = 200
let root_dir = '/'
let success_message = 'Working'

// to check in browser that browser is working
app.get(root_dir, (request, response) => {
    response.status(success_code).json({
        message: success_message
    })
})

// run server
let port = 5000;
app.listen(port, () => {
    console.log('Server is running..')
})