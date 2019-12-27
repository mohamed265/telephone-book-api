const BaseLocalDAO = require('./base/BaseLocalDAO');
const GovernorateLocal = require('./GovernorateLocal');
const Lang = require('./Lang');
const Sequelize = require('Sequelize');
const City = require('./City');
const Contact = require('./Contact');

class Governorate extends BaseLocalDAO {

}
Governorate.init(
    BaseLocalDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Governorate'
});

Governorate.daoName = 'Governorate';

Governorate.tableAttributes = BaseLocalDAO.tableAttributes;

Governorate.governorateLocals = Governorate.hasMany(GovernorateLocal, {
    as: 'governorateLocals',
    unique: false
});

Governorate.cities = Governorate.hasMany(City, {
    as: 'cities',
    unique: false
});

Governorate.belongsToMany(Lang, { through: 'LK_Governorate_Local' });


Governorate.includes = [
    { model: GovernorateLocal, as: 'governorateLocals' },
    { model: City, as: 'cities' }
];

Governorate.hasMany(Contact);

module.exports = Governorate;