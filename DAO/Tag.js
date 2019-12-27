const BaseLocalDAO = require('./base/BaseLocalDAO');
const TagLocal = require('./TagLocal');
const Lang = require('./Lang');
const Sequelize = require('Sequelize');

class Tag extends BaseLocalDAO {

}

Tag.tableAttributes = {};

let keys = Object.keys(BaseLocalDAO.tableAttributes);
for (let key of keys) {
    Tag.tableAttributes[key] = BaseLocalDAO.tableAttributes[key];
}

Tag.tableAttributes.description = {
    type: Sequelize.STRING,
    allowNull: false,
    field: "description"
};

Tag.init(
    Tag.tableAttributes, {
    sequelize,
    modelName: 'LK_Tag'
});

Tag.daoName = 'Tag';

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

