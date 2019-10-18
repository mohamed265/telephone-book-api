const BaseLocalDAO = require('./base/BaseLocalDAO');
const CountryLocal = require('./CountryLocal');
const Lang = require('./Lang');
const Sequelize = require('Sequelize');
const City = require('./City');

class Country extends BaseLocalDAO {

}
Country.init(
    BaseLocalDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Country'
});


Country.locals = Country.hasMany(CountryLocal, {
    as: 'locals',
    unique: false
});

Country.cities = Country.hasMany(City, {
    as: 'cities',
    unique: false
});

Country.belongsToMany(Lang, { through: 'LK_Country_Local' });


Country.includes = [
    { model: CountryLocal, as: 'locals' },
    { model: City, as: 'cities' }
];

module.exports = Country;