const db = require('../DAO');

module.exports = function (DAO) {

    const LocalizedModel = require(`../models/${DAO}Model`);

    const localWrapper = require(`./LocalWrapper`)(`${DAO}`);

    return {
        createDTO: (dao) => {
            var dto = {};

            dto.id = dao.id;

            dto.name = dao.name;

            dto.locals = localWrapper.createDTO(dao);

            return dto;
        },
        createModel: (dao) => {

            var model = new LocalizedModel();

            Object.keys(model).forEach(key => {
                model[key] = dao[key];
            })

            var modelLocals = localWrapper.createModel(dao);

            Object.keys(modelLocals).forEach(key => {
                model[key] = modelLocals[key];
            })

            return model;
        },
        createDAO: (model) => {
            var name = model.name;

            var dao = db[`${DAO}`].build({
                name: name,
                locals: localWrapper.createDAOArray(model.locals)
            }, {
                include: [{
                    association: db[`${DAO}`].locals,
                    as: 'locals'
                }]
            });

            return dao;
        }
    }
}