const express = require('express')
const { contactUs } = require('../Colections.js/UserCollection')
 
const router = express.Router()

router.post('/contactUs', contactUs)


module.exports = router
