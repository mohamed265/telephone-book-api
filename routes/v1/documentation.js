/**
* @typedef error_dto
* @property {string} field.required - field name
* @property {string} value.required - value that cause error
* @property {string} error.required - error message
*/

/**
* @typedef not_found_dto
* @property {string} status.required - status code - eg: 202
*/

/**
* @typedef bad_request
* @property {string} status.required - status code - eg: 400
* @property {Array.<error_dto>} data.required - errors list
*/

/**
* @typedef internal_error_respone
* @property {string} status.required - status code - eg: 500
* @property {string} message.required - error - eg: error message or internal error message
*/