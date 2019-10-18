const BaseLocalDAO = require('./base/BaseLocalDAO');
const CityLocal = require('./CityLocal');
const Lang = require('./Lang');
const Sequelize = require('Sequelize');

class City extends BaseLocalDAO {

}
City.init(
    BaseLocalDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_City'
});


City.locals = City.hasMany(CityLocal, {
    as: 'locals',
    unique: false
});

City.belongsToMany(Lang, { through: 'LK_City_Local' });

module.exports = City;
