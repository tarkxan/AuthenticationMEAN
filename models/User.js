const { Schema, model } = require('mongoose');

const user_schema = new Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
})

module.exports = model('users', user_schema)
