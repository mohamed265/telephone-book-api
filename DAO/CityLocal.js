// module.exports = (sequelize, type) => {
//     cityLocal = sequelize.define('LK_City_Local', {
//         id: {
//             type: type.UUID,
//             defaultValue: type.UUIDV4,
//             primaryKey: true,
//             allowNull: false,
//             unique: true
//         },
//         value: type.STRING
//     })

//     cityLocal.modelName = 'CityLocal';

//     return cityLocal;
// }


const BaseLocalValueDAO = require('./base/BaseLocalValueDAO.js');
const Sequelize = require('Sequelize');

class CityLocal extends BaseLocalValueDAO {

}
CityLocal.init(
    BaseLocalValueDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_City_Local'
});


module.exports = CityLocal;