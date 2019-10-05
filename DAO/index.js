'use strict';

var path = require('path');

var Sequelize = require('sequelize');

var basename = path.basename(__filename);

const listDirUtility = require('../utils/listDirFiles');

var dbConfig = require('./../database/DBConfig');

var db = {};


listDirUtility.list(__dirname, [basename], function (file) {
  var model = require('./' + file);
  db[model.name] = model;
});

// sync();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
