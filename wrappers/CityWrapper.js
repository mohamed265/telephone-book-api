const DAO = require('../DAO');
const CityModel = require('../models/CityModel');
const localWrapper = require('./LocalWrapper')('City');

module.exports.createDTO = function (dao) {
    var dto = {};

    dto.id = dao.id;

    dto.name = dao.name;

    dto.locals = localWrapper.createDTO(dao);

    return dto;
}


module.exports.createModel = function (dao) {

    var model = new CityModel();

    Object.keys(model).forEach(key => {
        model[key] = dao[key];
    })

    var modelLocals = localWrapper.createModel(dao);

    Object.keys(modelLocals).forEach(key => {
        model[key] = modelLocals[key];
    })

    return model;
}

module.exports.createDAO = function (model) {
    var name = model.name;

    var dao = DAO.City.build({
        name: name,
        locals: localWrapper.createDAOArray(model.locals)
    }, {
        include: [{
            association:  DAO.City.locals,
            as: 'locals'
        }]
    });

    return dao;
}