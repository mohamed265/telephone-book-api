// module.exports = (sequelize, type) => {
//     tag = sequelize.define('LK_Tag', {
//         id: {
//             type: type.UUID,
//             defaultValue: type.UUIDV4,
//             primaryKey: true,
//             allowNull: false,
//             unique: true
//         },
//         name: type.STRING
//     })

//     tag.modelName = 'Tag';
    
//     tag.associate = function (models) {
//         models.Tag.locals = models.Tag.hasMany(models.TagLocal, {
//             as: 'locals',
//             unique: false
//         });
//         models.Tag.belongsToMany(models.Lang, { through: 'LK_Tag_Local' });
//     };

//     return tag;
// }

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

module.exports = Tag;

