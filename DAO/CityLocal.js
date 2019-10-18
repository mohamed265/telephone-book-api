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