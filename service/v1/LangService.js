
var logger = require('../../utils/logger.js').logger;

var util = require('util');

var db = require('../../DAO');

var baseService = require('./Base/BaseService')('Lang');

var langWrapper = require(`../../wrappers/LangWrapper`);

module.exports = {
    getAll: (callback) => baseService.getAll(callback),

    getById: (id, callback) => baseService.getById(id, callback),

    getByIsoCode: (isoCode, callback) => {
        db.Lang
            .findOne({ where: { isoCode: isoCode } })
            .then(
                dao => {
                    callback(dao);
                }
            );
    },

    save: (body, successCallback, errorCallback) => baseService.save(body, successCallback, errorCallback),

    update: (id, body, successCallback, errorCallback) => baseService.update(id, body, successCallback, errorCallback),

    delete: (id, callback) => baseService.delete(id, callback)
}