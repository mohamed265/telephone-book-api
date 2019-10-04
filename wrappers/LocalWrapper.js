const DAO = require('../DAO');

module.exports = function (daoName) {


    const modelLocalDAO = require(`../DAO/${daoName}Local`);

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

            var dao = modelLocalDAO.build({
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

            if (models) {
                models.forEach(model => {

                    var value = model.value;

                    var isoCode = model.isoCode;

                    modlesResults.push(modelLocalDAO.build({
                        value: value,
                        LKLangIsoCode: isoCode,
                    }));

                })
            }
            return modlesResults;
        }
    }
}

module.exports.createModel = function (daoModel) {

    var model = {};

    var locals = undefined;

    var localsArray = undefined;

    if (daoModel[`LK_${daoName}_Locals`] && daoModel.LK_Langs) {
        locals = {};

        localsArray = [];

        daoModel[`LK_${daoName}_Locals`].forEach(local => {
            var isoCode = getIsoCodeByLangId(daoModel.LK_Langs, local.LKLangId);

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