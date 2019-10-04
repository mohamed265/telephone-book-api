// module.exports = (sequelize, type) => {
//     country = sequelize.define('LK_Country', {
//         id: {
//             type: type.UUID,
//             defaultValue: type.UUIDV4,
//             primaryKey: true,
//             allowNull: false,
//             unique: true
//         },
//         name: type.STRING
//     })

//     country.modelName = 'Country';

//     country.associate = function (models) {
//         models.Country.locals = models.Country.hasMany(models.CountryLocal, {
//             as: 'locals',
//             unique: false
//         });
//         models.Country.belongsToMany(models.Lang, { through: 'LK_Country_Local' });
//     };

//     return country;
// }


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