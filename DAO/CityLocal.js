const BaseLocalValueDAO = require('./base/BaseLocalValueDAO.js');
const Sequelize = require('Sequelize');

class CityLocal extends BaseLocalValueDAO {

}
CityLocal.init(
    BaseLocalValueDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_City_Local'
});

CityLocal.daoName = 'CityLocal';

CityLocal.tableAttributes = BaseLocalValueDAO.tableAttributes;

module.exports = CityLocal;