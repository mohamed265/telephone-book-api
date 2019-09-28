
var logger = require('../../../utils/logger.js').logger;

var util = require('util');

var db = require('../../../DAO');

module.exports = function (DAO) {

    var wrapper = require(`../../../wrappers/${DAO}Wrapper`);

    return {
        getAll: function (callback) {
            db[DAO].findAll().then(
                daos => {
                    callback(daos);
                }
            );
        },
        getById: function (id, callback) {
            db[DAO].findByPk(id).then(
                dao => {
                    callback(dao);
                }
            );
        },
        save: function (body, successCallback, errorCallback) {

            var dao = wrapper.createDAO(body);

            logger.info(`adding ${DAO} model: ${util.inspect(body)}`);

            dao.save()
                .then(model => {
                    successCallback(model);
                })
                .catch(exception => {
                    errorCallback(exception);
                });
        },
        update: function (id, body, successCallback, errorCallback) {

            logger.info(`update ${DAO} model with id: ${id}`);

            db[DAO].findByPk(id)
                .then(dao => {
                    logger.info(`${DAO} model new values: ${util.inspect(body)}`);
                    return dao.update(body)
                }).then(model => {
                    successCallback(model);
                }).catch(exception => {
                    errorCallback(exception);
                });
        },
        delete: function (id, callback) {

            logger.info(`delete ${DAO} model with id: ${id}`);

            db[DAO].destroy({
                where: { id: id }
            }).then(deletedOwner => {
                callback(deletedOwner);
            });
        }
    }
}