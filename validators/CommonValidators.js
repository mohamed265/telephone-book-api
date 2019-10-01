module.exports.validateString = function (fieldName, value, maxLength) {
    var errors = [];

    if (!value || value.length == 0) {
        errors.push({
            field: fieldName,
            value: value,
            error: fieldName + ' field mandatory'
        })
    }

    errors = errors.concat(this.validateMaxLengthString(fieldName, value, maxLength));

    return errors;
}

module.exports.validateMandatoryString = function (fieldName, value, maxLength) {
    var errors = [];

    if (value && value.length > maxLength) {
        errors.push({
            field: fieldName,
            value: value,
            error: fieldName + ' field max length is: ' + maxLength
        })
    }

    return errors;
}

module.exports.validateMaxLengthString = function (fieldName, value, maxLength) {
    var errors = [];

    if (value && value.length > maxLength) {
        errors.push({
            field: fieldName,
            value: value,
            error: fieldName + ' field max length is: ' + maxLength
        })
    }

    return errors;
}

module.exports.validateExactLengthString = function (fieldName, value, exactLength) {
    var errors = [];

    if (value) {
        if (value.length != exactLength) {
            errors.push({
                field: fieldName,
                value: value,
                error: fieldName + ' field length should be: ' + exactLength
            })
        }
    } else {
        errors = errors.concat(this.validateMandatoryString(fieldName, value, exactLength));
    }

    return errors;
}

module.exports.validateLocals = function (locals) {
    var errors = [];

    if (Array.isArray(locals)) {

        locals.forEach(local => {
            errors = errors.concat(this.validateString('isoCode', local.isoCode, 255));

            errors = errors.concat(this.validateString('value', local.value, 255));
        });
    } else {
        errors.push({
            field: 'locals',
            value: locals,
            error: 'locals should be an array of form [{isCode: "en", value: "word"}]'
        });
    }

    return errors;
}
