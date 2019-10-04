// module.exports = (sequelize, type) => {
//     tagLocal = sequelize.define('LK_Tag_Local', {
//         id: {
//             type: type.UUID,
//             defaultValue: type.UUIDV4,
//             primaryKey: true,
//             allowNull: false,
//             unique: true
//         },
//         value: type.STRING
//     })

//     tagLocal.modelName = 'TagLocal';

//     return tagLocal;
// }


const BaseLocalValueDAO = require('./base/BaseLocalValueDAO.js');
const Sequelize = require('Sequelize');

class TagLocal extends BaseLocalValueDAO {

}
TagLocal.init(
    BaseLocalValueDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Tag_Local'
});


module.exports = TagLocal;