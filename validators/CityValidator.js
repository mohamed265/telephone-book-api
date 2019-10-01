const ValidationExcepion = require('../exceptions/ValidationExcepion');

const commonValidators = require('./CommonValidators');

module.exports.validate = function (city) {
    var errors = [];

    errors = errors.concat(commonValidators.validateMaxLengthString('name', city.name, 255));

    if (city.locals)
        errors = errors.concat(commonValidators.validateLocals(city.locals));

    if (errors.length)
        throw new ValidationExcepion('Validation CityModel faild', errors);
}

module.exports.validateLength = function (lang) {
    var errors = [];

    errors = errors.concat(commonValidators.validateMaxLengthString('name', lang.name, 255));

    if (errors.length)
        throw new ValidationExcepion('Validation LangModel faild', errors);
}

module.exports.validateParams = function (params) {
    var errors = [];

    errors = errors.concat(commonValidators.validateExactLengthString('id', params.id, 36));

    if (params.isoCode)
        errors = errors.concat(commonValidators.validateMaxLengthString('isoCode', params.isoCode, 255));

    if (errors.length)
        throw new ValidationExcepion('Validation Lang Params faild', errors);
}
