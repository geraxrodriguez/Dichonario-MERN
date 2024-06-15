const mongoose = require('mongoose')

//creating schema for submissions aka 'subs'
const SubSchema = new mongoose.Schema({
    dicho: {
        type: String,
        required: true,
    },
    literalMeaning: {
        type: String,
        required: true,
    },
    actualMeaning: {
        type: String,
        required: true,
    },
    examples: {
        type: Array,
        required: true,
    },
    related: {
        type: String,
        required: false
    },
    comments: {
        type: String,
        required: false,
    },
})

module.exports = mongoose.model('Sub', SubSchema)
