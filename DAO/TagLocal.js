const BaseLocalValueDAO = require('./base/BaseLocalValueDAO.js');
const Sequelize = require('Sequelize');

class TagLocal extends BaseLocalValueDAO {

}
TagLocal.init(
    BaseLocalValueDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Tag_Local'
});

TagLocal.daoName = 'TagLocal';

TagLocal.tableAttributes = BaseLocalValueDAO.tableAttributes;

module.exports = TagLocal;