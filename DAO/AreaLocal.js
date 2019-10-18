const BaseLocalValueDAO = require('./base/BaseLocalValueDAO.js');
const Sequelize = require('Sequelize');

class AreaLocal extends BaseLocalValueDAO {

}
AreaLocal.init(
    BaseLocalValueDAO.tableAttributes, {
    sequelize,
    modelName: 'LK_Area_Local'
});


module.exports = AreaLocal;