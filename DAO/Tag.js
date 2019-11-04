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

Tag.daoName = 'Tag';

Tag.tableAttributes = BaseLocalDAO.tableAttributes;

Tag.tagLocals = Tag.hasMany(TagLocal, {
    as: 'tagLocals',
    unique: false
});

Tag.subTags = Tag.hasMany(Tag, {
    as: 'subTags',
    unique: false
});

Tag.belongsToMany(Lang, { through: 'LK_Tag_Local' });

Tag.includes = [
    { model: TagLocal, as: 'tagLocals' }
];

module.exports = Tag;

