// module.exports = (sequelize, type) => {
//     type = sequelize.define('LK_Type', {
//         id: {
//             type: type.UUID,
//             defaultValue: type.UUIDV4,
//             primaryKey: true,
//             allowNull: false,
//             unique: true
//         },
//         name: type.STRING
//     })

//     type.modelName = 'Type';

//     type.associate = function (models) {
//         models.Type.locals = models.Type.hasMany(models.TypeLocal, {
//             as: 'locals',
//             unique: false
//         });
//         models.Type.belongsToMany(models.Lang, { through: 'LK_Type_Local' });
//     };

//     return type;
// }

const BaseLocalDAO = require('./base/BaseLocalDAO');
const TypeLocal = require('./TypeLocal');
const Lang = require('./Lang');
const Sequelize = require('Sequelize');

class Type extends BaseLocalDAO {

}
Type.init(
    BaseLocalDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Type'
});


Type.locals = Type.hasMany(TypeLocal, {
    as: 'locals',
    unique: false
});

Type.belongsToMany(Lang, { through: 'LK_Type_Local' });

module.exports = Type;