const { patch } = require("../app")

let username = 'admin'
let password = 'Welc0me12'
module.exports = {
    mongo_uri: `mongodb+srv://${username}:${password}@cluster0.xpmbh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    jwt: 'dev-jwt'
}