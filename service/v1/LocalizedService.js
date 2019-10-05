module.exports = function (daoName) {


    var wrapper = require(`../../wrappers/BaseLocalizedWrapper`)(`${daoName}`);

    var BaseServiceLocal = require('./Base/BaseServiceLocal')
    
    const baseServiceLocal = new BaseServiceLocal(daoName, wrapper);

    return {
        getAll: (callback) => baseServiceLocal.getAll(callback),

        getAllIncludeLocals: (callback) => baseServiceLocal.getAllIncludeLocals(callback),

        getById: (id, callback) => baseServiceLocal.getById(id, callback),

        getByIdWithLocals: (id, callback) => baseServiceLocal.getByIdWithLocals(id, callback),

        save: (body, successCallback, errorCallback) => baseServiceLocal.save(body, successCallback, errorCallback),

        update: (id, body, successCallback, errorCallback) => baseServiceLocal.update(id, body, successCallback, errorCallback),

        delete: (id, callback) => baseServiceLocal.delete(id, callback),

        deleteLocal: (id, isoCode, callback) => baseServiceLocal.deleteLocal(id, isoCode, callback),

        saveLocal: (id, body, successCallback, errorCallback) => baseServiceLocal.saveLocal(id, body, successCallback, errorCallback),

        updateLocal: (id, isoCode, body, successCallback, errorCallback) => baseServiceLocal.updateLocal(id, isoCode, body, successCallback, errorCallback)
    }
}