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