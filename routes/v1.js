const express = require('express');
const router = express.Router();

var path = require('path');
var version = 'v1';

const listDirUtility = require('../utils/listDirFiles');

listDirUtility.list(path.join(__dirname, version), [], function (file) {
    var route = require(path.join(__dirname, version, file));
    router.use('/' + file.slice(0, -3), route);
})

module.exports = router;
