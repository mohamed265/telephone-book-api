const BaseLocalDAO = require('./base/BaseLocalDAO');
const AreaLocal = require('./AreaLocal');
const Lang = require('./Lang');
const Sequelize = require('Sequelize');

class Area extends BaseLocalDAO {

}
Area.init(
    BaseLocalDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Area'
});


Area.locals = Area.hasMany(AreaLocal, {
    as: 'locals',
    unique: false
});

Area.belongsToMany(Lang, { through: 'LK_Area_Local' });

module.exports = Area;