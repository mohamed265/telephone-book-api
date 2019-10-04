'use strict';

var path = require('path');

var Sequelize = require('sequelize');

var basename = path.basename(__filename);

const listDirUtility = require('../utils/listDirFiles');

var dbConfig = require('./../database/DBConfig');

var db = {};

listDirUtility.list(__dirname, [basename], function (file) {
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.modelName] = model;
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
