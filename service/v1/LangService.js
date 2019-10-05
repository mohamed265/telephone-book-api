
var logger = require('../../utils/logger.js').logger;

var DAO = require('../../DAO');

var langWrapper = require(`../../wrappers/LangWrapper`);

var BaseService = require('./Base/BaseService')

const baseService = new BaseService('Lang', langWrapper);

module.exports = {
    getAll: (callback) => baseService.getAll(callback),

    getById: (id, callback) => baseService.getById(id, callback),

    getByIsoCode: (isoCode, callback) => {
        DAO.Lang
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