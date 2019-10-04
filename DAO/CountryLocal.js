// module.exports = (sequelize, type) => {
//     countryLocal = sequelize.define('LK_Country_Local', {
//         id: {
//             type: type.UUID,
//             defaultValue: type.UUIDV4,
//             primaryKey: true,
//             allowNull: false,
//             unique: true
//         },
//         value: type.STRING
//     })

//     countryLocal.modelName = 'CountryLocal';

//     return countryLocal;
// }


const BaseLocalValueDAO = require('./base/BaseLocalValueDAO.js');
const Sequelize = require('Sequelize');

class CountryLocal extends BaseLocalValueDAO {

}
CountryLocal.init(
    BaseLocalValueDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Country_Local'
});


module.exports = CountryLocal;