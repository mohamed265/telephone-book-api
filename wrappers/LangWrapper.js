const DAO = require('../DAO');
const LangModel = require('../models/LangModel');

module.exports.createDTO = function (langDAO) {
    var langDTO = {};

    langDTO.id = langDAO.id;

    langDTO.name = langDAO.name;

    langDTO.isoCode = langDAO.isoCode;

    return langDTO;
}

module.exports.createModel = function (langDAO) {

    var langModel = new LangModel();

    Object.keys(langModel).forEach(key => {
        langModel[key] = langDAO[key];
    })

    return langModel;
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