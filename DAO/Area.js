// module.exports = (sequelize, type) => {
//     area = sequelize.define('LK_Area', {
//         id: {
//             type: type.UUID,
//             defaultValue: type.UUIDV4,
//             primaryKey: true,
//             allowNull: false,
//             unique: true
//         },
//         name: type.STRING
//     })

//     area.modelName = 'Area';

//     area.associate = function (models) {

//         models.Area.locals = models.Area.hasMany(models.AreaLocal, {
//             as: 'locals',
//             unique: false
//         });

//         models.Area.belongsToMany(models.Lang, { through: 'LK_Area_Local' });
//     };

//     return area;
// }

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