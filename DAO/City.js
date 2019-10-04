// module.exports = (sequelize, type) => {
//     city = sequelize.define('LK_City', {
//         id: {
//             type: type.UUID,
//             defaultValue: type.UUIDV4,
//             primaryKey: true,
//             allowNull: false,
//             unique: true
//         },
//         name: type.STRING
//     })

//     city.modelName = 'City';

//     city.associate = function (models) {

//         models.City.locals = models.City.hasMany(models.CityLocal, {
//             as: 'locals',
//             unique: false
//         });

//         models.City.belongsToMany(models.Lang, { through: 'LK_City_Local', unique: false });
//     };

//     return city;
// }

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
