'use strict';

var path = require('path');

var Sequelize = require('sequelize');

var basename = path.basename(__filename);

const listDirUtility = require('../utils/listDirFiles');

var dbConfig = require('./../database/DBConfig');

var db = {};

// listDirUtility.list(__dirname, [basename, 'LocalizedDAO.js', 'LocalizedLocalDAO.js', 'Lang.js', 'Lang2.js',

//   'AreaLocal.js', 'CityLocal.js', 'CountryLocal.js', 'TagLocal.js', 'TypeLocal.js',
//   'Area.js', 'City.js', 'Country.js', 'Tag.js', 'Type.js'
// ], function (file) {
//   var model = sequelize['import'](path.join(__dirname, file));
//   db[model.modelName] = model;
// });


listDirUtility.list(__dirname, [basename, 'LocalizedDAO.js', 'LocalizedLocalDAO.js'], function (file) {
  var model = require('./' + file);
  db[model.name] = model;
});

// sync();

// var localizedDAOArray = ['Area', 'City', 'Country', 'Type', 'Tag'];

// localizedDAOArray.forEach(dao => {

//   var localizedDAO = require('./LocalizedDAO.js')(dao);

//   var modelDao = localizedDAO(sequelize, sequelize.Sequelize);

//   db[modelDao.modelName] = modelDao;

//   var localizedLocalDAO = require('./LocalizedLocalDAO.js')(dao);

//   var modelLocalDao = localizedLocalDAO(sequelize, sequelize.Sequelize);

//   db[modelLocalDao.modelName] = modelLocalDao;
// })

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
