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