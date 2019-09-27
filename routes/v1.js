const express = require('express');
const router = express.Router();

var contact = require('./v1/contact');
router.use('/contact', contact);

var city = require('./v1/city');
router.use('/city', city);

module.exports = router;
