
var logger = require('../../../utils/logger.js').logger;

var util = require('util');

var db = require('../../../DAO');

const ValidationExcepion = require('../../../exceptions/ValidationExcepion');

module.exports = function (DAO, wrapper) {

    // var wrapper = require(`../../../wrappers/BaseLocalizedWrapper`)(`${DAO}`);

    var localizedWrapper = require(`../../../wrappers/LocalizedWrapper`)(`${DAO}`);

    return {
        getAll: function (callback) {
            db[DAO].findAll().then(
                daos => {
                    callback(daos);
                }
            );
        },
        getAllIncludeLocals: function (callback) {

            db[DAO].findAll({
                include: [
                    { model: db[`${DAO}Local`], as: 'locals' }
                ]
            }).then(
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
        getByIdWithLocals: function (id, callback) {
            db[DAO].findByPk(id, {
                include: [
                    { model: db[`${DAO}Local`], as: 'locals' }
                ]
            }).then(
                dao => {
                    callback(dao);
                }
            );
        },
        save: function (body, successCallback, errorCallback) {

            var dao = wrapper.createDAO(body);

            logger.info(`adding ${DAO} model: ${util.inspect(body)}`);

            sequelize.transaction(t => {
                return dao.save({ transaction: t });
            }).then(result => {
                successCallback(result);
            }).catch(err => {
                errorCallback(err);
            });
        },
        update: function (id, body, successCallback, errorCallback) {

            logger.info(`update ${DAO} model with id: ${id}`);

            db[DAO].findByPk(id)
                .then(dao => {
                    logger.info(`${DAO} model new values: ${util.inspect(body)}`);
                    return dao.update(body)
                }).then(model => {
                    model.locals = undefined;
                    successCallback(model);
                }).catch(exception => {
                    errorCallback(exception);
                });
        },
        // updateWithLocals: function (id, body, successCallback, errorCallback) {

        //     logger.info(`update ${DAO} model with id: ${id}`);

        //     // db[DAO].findByPk(id)
        //     //     .then(dao => {
        //     //         logger.info(`${DAO} model new values: ${util.inspect(body)}`);
        //     //         return dao.update(body)
        //     //     }).then(model => {
        //     //         successCallback(model);
        //     //     }).catch(exception => {
        //     //         errorCallback(exception);
        //     //     });
        //     // sequelize.transaction(t => {
        //     //     return dao.save({ transaction: t });
        //     // })

        //     db[DAO].findByPk(id, {
        //         include: [
        //             { model: db[`${DAO}Local`], as: 'locals' }
        //         ]
        //     }).then(function (dao) {
        //         if (dao) {

        //             return dao.update(body).then(result => {
        //                 result.locals = undefined;
        //                 successCallback(result);
        //             }).catch(err => {
        //                 errorCallback(err);
        //             });
        //             // sequelize.transaction({ autocommit: false }).then(t => {
        //             sequelize.transaction(t => {
        //                 // if (body.locals && dao.locals) {
        //                 //     body.locals.forEach(newLocal => {
        //                 //         var local = dao.locals.filter(e => e.LKLangIsoCode == newLocal.isoCode)[0];
        //                 //         if (local) {
        //                 //             // local.value = newLocal.value;

        //                 //             // newLocal.id = local.id;
        //                 //             newLocal.LKCityId = local.LKCityId;
        //                 //             newLocal.LKLangIsoCode = local.LKLangIsoCode;

        //                 //             return local.update(newLocal, { transaction: t })
        //                 //                 .then(result => {
        //                 //                     return result;
        //                 //                 });
        //                 //         } else {
        //                 //             throw new Error(`no local in model with isoCode: ${newLocal.isoCode}`)
        //                 //         }
        //                 //     });
        //                 //     // body.locals = dao.locals;
        //                 // }
        //                 // body.locals = undefined;
        //                 return dao.update(body)
        //             }).then(result => {
        //                 successCallback(result);
        //             }).catch(err => {
        //                 errorCallback(err);
        //             });
        //         } else {
        //             throw new Error("no such product type id exist to update");
        //         }
        //     }).catch(err => {
        //         errorCallback(err);
        //     });
        // },
        delete: function (id, callback) {

            logger.info(`delete ${DAO} model with id: ${id}`);

            db[DAO].destroy({
                where: { id: id }
            }).then(deletedOwner => {
                callback(deletedOwner);
            });
        },
        deleteLocal: function (id, isoCode, callback) {

            logger.info(`delete ${DAO} local with id: ${id}, isoCode: ${isoCode}`);

            db[`${DAO}Local`].destroy({
                force: true,
                where: {
                    LKCityId: id,
                    l_k_lang_iso_code: isoCode
                }
            }).then(deletedOwner => {
                callback(deletedOwner);
            });
        },
        saveLocal: function (modelId, body, successCallback, errorCallback) {

            var dao = localizedWrapper.createDAO(modelId, body);

            logger.info(`adding local for ${DAO} model: ${util.inspect(body)}`);

            db[DAO].findByPk(modelId).then(modelDao => {
                return dao.save();
            }).then(result => {
                successCallback(result);
            }).catch(err => {
                errorCallback(err);
            });
        },
        updateLocal: function (modelId, isoCode, body, successCallback, errorCallback) {

            // body[`LK${DAO}Id`] = modelId;

            // body[`LKLangIsoCode`] = isoCode;

            logger.info(`updating local for ${DAO} model: ${util.inspect(body)}`);
            var where = {
                LKLangIsoCode: isoCode
            };

            where[`LK${DAO}Id`] = modelId;

            db[`${DAO}Local`].findOne({
                where: where
            }).then(modelDao => {
                if (modelDao)
                    return modelDao.update(body);
                else
                    throw new ValidationExcepion(`no local in model id: ${modelId} with isoCode: ${isoCode}`, {
                        field: "id or isoCode",
                        value: `${modelId} - ${isoCode}`,
                        error: `no local in model id: ${modelId} with isoCode: ${isoCode}`
                    })
            }).then(result => {
                successCallback(result);
            }).catch(err => {
                errorCallback(err);
            });
        }
    }
}