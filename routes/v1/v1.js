const express = require('express');
const router = express.Router();

var contact = require('./contact');
router.use('/contact', contact);

module.exports = router;
