
var logger = require('../../utils/logger.js').logger;

var util = require('util');

var db = require('../../DAO');

var langWrapper = require('../../wrappers/LangWrapper');

module.exports = {
    getAll: function (callback) {
        db.Lang.findAll().then(
            langDaos => {
                callback(langDaos);
            }
        );
    },
    getById: function (id, callback) {
        db.Lang.findByPk(id).then(
            langDaos => {
                callback(langDaos);
            }
        );
    },
    save: function (body, successCallback, errorCallback) {

        var langDao = langWrapper.createDAO(body);

        logger.info("adding lang model: " + util.inspect(body));

        langDao.save()
            .then(model => {
                successCallback(model);
            })
            .catch(exception => {
                errorCallback(exception);
            });
    },
    update: function (id, body, successCallback, errorCallback) {

        logger.info(`update lang model with id: ${id}`);

        db.Lang.findByPk(id)
            .then(langDAO => {
                logger.info("lang model new values: " + util.inspect(body));
                return langDAO.update(body)
            }).then(model => {
                successCallback(model);
            }).catch(exception => {
                errorCallback(exception);
            });
    },
    delete: function (id, callback) {

        logger.info(`delete lang model with id: ${id}`);

        db.Lang.destroy({
            where: { id: id }
        }).then(deletedOwner => {
            callback(deletedOwner);
        });
    }
}