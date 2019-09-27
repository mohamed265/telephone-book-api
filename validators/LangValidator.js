const ValidationExcepion = require('../exceptions/ValidationExcepion');

const commonValidators = require('./CommonValidators');

module.exports.validate = function (lang) {
    var errors = [];

    errors = errors.concat(commonValidators.validateString('isoCode', lang.isoCode, 255));

    errors = errors.concat(commonValidators.validateMaxLengthString('name', lang.name, 255));

    if (errors.length)
        throw new ValidationExcepion('Validation LangModel faild', errors);
}

module.exports.validateLength = function (lang) {
    var errors = [];

    errors = errors.concat(commonValidators.validateMaxLengthString('isoCode', lang.isoCode, 255));

    errors = errors.concat(commonValidators.validateMaxLengthString('name', lang.name, 255));

    if (errors.length)
        throw new ValidationExcepion('Validation LangModel faild', errors);
}

module.exports.validateParams = function (params) {
    var errors = [];

    errors = errors.concat(commonValidators.validateExactLengthString('id', params.id, 36));

    if (errors.length)
        throw new ValidationExcepion('Validation Lang Params faild', errors);
}
