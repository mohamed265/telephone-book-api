const BaseLocalDAO = require('./base/BaseLocalDAO');
const AreaLocal = require('./AreaLocal');
const Lang = require('./Lang');
const Sequelize = require('Sequelize');
const Contact = require('./Contact');

class Area extends BaseLocalDAO {

}

Area.init(
    BaseLocalDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Area'
});

Area.daoName = 'Area';

Area.tableAttributes = BaseLocalDAO.tableAttributes;

Area.areaLocals = Area.hasMany(AreaLocal, {
    as: 'areaLocals',
    unique: false
});

Area.belongsToMany(Lang, { through: 'LK_Area_Local' });

Area.includes = [
    { model: AreaLocal, as: 'areaLocals' }
];

Area.hasMany(Contact);

module.exports = Area;