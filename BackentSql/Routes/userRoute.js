const express = require('express')
const { contactUs, getDetails } = require('../Colections.js/UserCollection')
 
const router = express.Router()

router.post('/contactUs', contactUs)
router.get('/contactUs', getDetails)


module.exports = router
