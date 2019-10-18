const BaseLocalDAO = require('./base/BaseLocalDAO');
const TagLocal = require('./TagLocal');
const Lang = require('./Lang');
const Sequelize = require('Sequelize');

class Tag extends BaseLocalDAO {

}
Tag.init(
    BaseLocalDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Tag'
});


Tag.locals = Tag.hasMany(TagLocal, {
    as: 'locals',
    unique: false
});

Tag.belongsToMany(Lang, { through: 'LK_Tag_Local' });

Tag.includes = [
    { model: TagLocal, as: 'locals' }
];

module.exports = Tag;

