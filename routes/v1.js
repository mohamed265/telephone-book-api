const express = require('express');
const router = express.Router();

var path = require('path');
var version = 'v1';

const listDirUtility = require('../utils/listDirFiles');

listDirUtility.list(path.join(__dirname, version), ['documentation.js'], function (file) {
    var route = require(path.join(__dirname, version, file));
    router.use('/' + file.slice(0, -6), route);
})

module.exports = router;
