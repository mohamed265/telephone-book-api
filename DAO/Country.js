const BaseLocalDAO = require('./base/BaseLocalDAO');
const CountryLocal = require('./CountryLocal');
const Lang = require('./Lang');
const Sequelize = require('Sequelize');

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

Country.belongsToMany(Lang, { through: 'LK_Country_Local' });

module.exports = Country;