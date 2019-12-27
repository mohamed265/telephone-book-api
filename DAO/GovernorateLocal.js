const BaseLocalValueDAO = require('./base/BaseLocalValueDAO.js');
const Sequelize = require('Sequelize');

class GovernorateLocal extends BaseLocalValueDAO {

}
GovernorateLocal.init(
    BaseLocalValueDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Governorate_Local'
});
GovernorateLocal.daoName = 'GovernorateLocal';

GovernorateLocal.tableAttributes = BaseLocalValueDAO.tableAttributes;

module.exports = GovernorateLocal;