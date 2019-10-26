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

Country.daoName = 'Country';

Country.tableAttributes = BaseLocalDAO.tableAttributes;

Country.countryLocals = Country.hasMany(CountryLocal, {
    as: 'countryLocals',
    unique: false
});

Country.cities = Country.hasMany(City, {
    as: 'cities',
    unique: false
});

Country.belongsToMany(Lang, { through: 'LK_Country_Local' });


Country.includes = [
    { model: CountryLocal, as: 'countryLocals' },
    { model: City, as: 'cities' }
];

module.exports = Country;