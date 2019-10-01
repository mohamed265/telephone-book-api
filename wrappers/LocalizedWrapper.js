const DAO = require('../DAO');
const CityModel = require('../models/CityModel');

module.exports = function (daoName) {

    return {
        createDTO: (dao) => {

            var model = {};

            model.value = dao.value;

            model.modelId = dao[`LK${daoName}Id`];

            model.isoCode = dao[`LKLangIsoCode`];

            return model;
        },
        createDAO: (modelId, localModel) => {
            var value = localModel.value;

            var isoCode = localModel.isoCode;

            var localizedDao = DAO[`${daoName}Local`].build({
                value: value,
                LKLangIsoCode: isoCode,
                isoCode: isoCode,
            });

            localizedDao[`LK${daoName}Id`] = modelId;

            return localizedDao;
        },
        createModel: (dao) => {

            var model = {};

            model.value = dao.value;

            model.modelId = dao[`LK${daoName}Id`];

            model.isoCode = dao[`LKLangIsoCode`];

            return model;
        }
    }
}