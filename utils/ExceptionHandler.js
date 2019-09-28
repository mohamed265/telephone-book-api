var logger = require('./logger.js').logger;

var responseUtility = require('./ResponseUtility.js');

var util = require('util');

module.exports.handle = function (response, exception) {
    if (exception.name == 'SequelizeUniqueConstraintError') {
        handleSequelizeUniqueConstraintError(response, exception);
    } else if (exception.name == 'ValidationException') {
        handleValidationException(response, exception);
    } else {
        logger.error(util.inspect(exception));
        responseUtility.createInternalErrorResponse(response, exception);
    }
}

function handleSequelizeUniqueConstraintError(response, exception) {

    logger.error(exception.message + ": " + exception.original.message);

    responseUtility.createBadRequestResponse(response, exception.errors.map(error => {
        return {
            field: error.path,
            value: error.value,
            error: error.message
        }
    }));
}

function handleValidationException(response, exception) {

    logger.error(exception.message + " " + util.inspect(exception.errors));

    responseUtility.createBadRequestResponse(response, exception.errors);
}

