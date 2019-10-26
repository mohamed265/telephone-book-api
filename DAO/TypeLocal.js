const BaseLocalValueDAO = require('./base/BaseLocalValueDAO.js');
const Sequelize = require('Sequelize');

class TypeLocal extends BaseLocalValueDAO {

}

TypeLocal.init(
    BaseLocalValueDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Type_Local'
});

TypeLocal.daoName = 'TypeLocal';

TypeLocal.tableAttributes = BaseLocalValueDAO.tableAttributes;

module.exports = TypeLocal;