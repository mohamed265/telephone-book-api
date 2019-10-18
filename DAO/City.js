const BaseLocalDAO = require('./base/BaseLocalDAO');
const CityLocal = require('./CityLocal');
const Lang = require('./Lang');
const Sequelize = require('Sequelize');
const Area = require('./Area');

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

City.areas = City.hasMany(Area, {
    as: 'areas',
    unique: false
});

City.belongsToMany(Lang, { through: 'LK_City_Local' });

City.includes = [
    { model: CityLocal, as: 'locals' },
    { model: Area, as: 'areas' }
];

module.exports = City;
