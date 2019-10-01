module.exports = function (DAO) {

    var baseService = require('./Base/BaseService')(DAO);

    return {
        getAll: (callback) => baseService.getAll(callback),

        getAllIncludeLocals: (callback) => baseService.getAllIncludeLocals(callback),

        getById: (id, callback) => baseService.getById(id, callback),

        getByIdWithLocals: (id, callback) => baseService.getByIdWithLocals(id, callback),

        save: (body, successCallback, errorCallback) => baseService.save(body, successCallback, errorCallback),

        update: (id, body, successCallback, errorCallback) => baseService.update(id, body, successCallback, errorCallback),

        delete: (id, callback) => baseService.delete(id, callback),

        deleteLocal: (id, isoCode, callback) => baseService.deleteLocal(id, isoCode, callback),

        saveLocal: (id, body, successCallback, errorCallback) => baseService.saveLocal(id, body, successCallback, errorCallback),

        updateLocal: (id, isoCode, body, successCallback, errorCallback) => baseService.updateLocal(id, isoCode, body, successCallback, errorCallback)
    }
}