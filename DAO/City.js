const BaseLocalDAO = require('./base/BaseLocalDAO');
const CityLocal = require('./CityLocal');
const Lang = require('./Lang');
const Sequelize = require('Sequelize');
const Area = require('./Area');
const Contact = require('./Contact');

class City extends BaseLocalDAO {

}
City.init(
    BaseLocalDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_City'
});

City.daoName = 'City';

City.tableAttributes = BaseLocalDAO.tableAttributes;

City.cityLocals = City.hasMany(CityLocal, {
    as: 'cityLocals',
    unique: false
});

City.areas = City.hasMany(Area, {
    as: 'areas',
    unique: false
});

City.belongsToMany(Lang, { through: 'LK_City_Local' });

City.includes = [
    { model: CityLocal, as: 'cityLocals' },
    { model: Area, as: 'areas' }
];

City.hasMany(Contact);

module.exports = City;
