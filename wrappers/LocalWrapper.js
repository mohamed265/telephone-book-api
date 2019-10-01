const DAO = require('../DAO');
const CityModel = require('../models/CityModel');

module.exports = function (daoName) {

    return {
        createDTO: (dao) => {

            var locals = undefined;

            if (dao[`locals`]) {
                locals = [];

                dao[`locals`].forEach(local => {
                    locals.push({
                        isoCode: local.LKLangIsoCode,
                        value: local.value,
                    })
                });
            }

            return locals;
        },
        createDAO: (parentDAO, model) => {
            var value = model.value;

            var isoCode = model.isoCode;

            var dao = DAO[`${daoName}Local`].build({
                value: value,
                LKLangIsoCode: isoCode,
            });

            dao[`LK${daoName}Id`] = parentDAO.id;

            if (!parentDAO[`LK_${daoName}_Locals`])
                parentDAO[`LK_${daoName}_Locals`] = [];

            parentDAO[`LK_${daoName}_Locals`].push(dao);

            return dao;
        },
        createDAOArray: (models) => {

            var modlesResults = [];

            models.forEach(model => {

                var value = model.value;

                var isoCode = model.isoCode;

                modlesResults.push({
                    value: value,
                    LKLangIsoCode: isoCode,
                });

            })

            return modlesResults;
        }
    }
}

module.exports.createModel = function (dao) {

    var model = {};

    var locals = undefined;

    var localsArray = undefined;

    if (dao[`LK_${daoName}_Locals`] && dao.LK_Langs) {
        locals = {};

        localsArray = [];

        dao[`LK_${daoName}_Locals`].forEach(local => {
            var isoCode = getIsoCodeByLangId(dao.LK_Langs, local.LKLangId);

            locals[isoCode] = local.value;

            localsArray.push({
                isoCode: isoCode,
                value: local.value,
                createdAt: local.createdAt,
                updatedAt: local.updatedAt,
                deletedAt: local.deletedAt
            })
        });
    }

    model.locals = locals;

    model.localsArray = localsArray;

    return model;
}

module.exports.createDAO = function (langModel) {
    var name = langModel.name;

    var isoCode = langModel.isoCode;

    var langDao = DAO.Lang.build({
        name: name,
        isoCode: isoCode
    });

    return langDao;
}