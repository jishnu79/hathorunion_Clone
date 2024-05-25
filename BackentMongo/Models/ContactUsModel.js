const mongoose = require('mongoose')


const contactUs = new mongoose.Schema({
    name: {
        type: String,
        require: ['name require', true]
    },
    email: {
        type: String,
        require: ['name require', true]
    },
    phone: {
        type: Number,
        require: ['name require', true]
    },
    catogery: {
        type: String,
        require: ['name require', true]
    },
    message: {
        type: String,
        require: ['name require', true]
    }
})

const contact = mongoose.model('ContactUs', contactUs);
module.exports = contact