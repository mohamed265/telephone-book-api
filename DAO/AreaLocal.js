const BaseLocalValueDAO = require('./base/BaseLocalValueDAO.js');
const Sequelize = require('Sequelize');

class AreaLocal extends BaseLocalValueDAO {

}

AreaLocal.init(
    BaseLocalValueDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Area_Local'
});

AreaLocal.daoName = 'AreaLocal';

AreaLocal.tableAttributes = BaseLocalValueDAO.tableAttributes;

module.exports = AreaLocal;