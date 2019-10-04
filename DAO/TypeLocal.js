// module.exports = (sequelize, type) => {
//     typeLocal = sequelize.define('LK_Type_Local', {
//         id: {
//             type: type.UUID,
//             defaultValue: type.UUIDV4,
//             primaryKey: true,
//             allowNull: false,
//             unique: true
//         },
//         value: type.STRING
//     })

//     typeLocal.modelName = 'TypeLocal';

//     return typeLocal;
// }

const BaseLocalValueDAO = require('./base/BaseLocalValueDAO.js');
const Sequelize = require('Sequelize');

class TypeLocal extends BaseLocalValueDAO {

}
TypeLocal.init(
    BaseLocalValueDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Type_Local'
});


module.exports = TypeLocal;