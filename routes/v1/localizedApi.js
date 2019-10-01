const express = require('express');
const router = express.Router();

var logger = require('../../utils/logger.js').logger;

var responseUtility = require('../../utils/ResponseUtility');

var exceptionHandler = require('../../utils/ExceptionHandler');

var localizedValidator = require(`../../validators/localizedValidator`);

module.exports = function (DAO) {

    var routePath = DAO.slice(0, 1).toString().toLowerCase() + DAO.slice(1);

    var localizedService = require('../../service/v1/LocalizedService')(`${DAO}`);

    var baseLocalizedWrapper = require(`../../wrappers/BaseLocalizedWrapper`)(`${DAO}`);

    var localizedWrapper = require('../../wrappers/LocalizedWrapper')(`${DAO}`);

    /**
     * @typedef city_dto
     * @property {string} isoCode.required - city isoCode - eg: ar
     * @property {string} name.required - city name - eg: arabic
     * @property {string} id.required - model id - eg: 0ea04144-a9b4-4280-b689-f9f157b50769
     */

    /**
    * @typedef success_list_dto
    * @property {string} status.required - status code - eg: 200
    * @property {Array.<city_dto>} data.required - city list
    */

    /**
    * List all city api
    * @route GET /city
    * @group City Section - city apis
    * @returns {success_list_dto.model} 200 - normal response
    * @returns {internal_error_respone.model} 500 - error response
    */
    router.get(`/${DAO}/`, (req, res) => {
        try {

            logger.info(`list all ${DAO} model`);

            localizedService.getAll(daos => {
                var localizedDtos = daos.map(localizedDao => baseLocalizedWrapper.createDTO(localizedDao));
                responseUtility.createSuccessResponse(res, localizedDtos);
            });

        } catch (exception) {
            exceptionHandler.handle(res, exception);
        }
    });


    /**
    * @typedef success_dto
    * @property {string} status.required - status code - eg: 200
    * @property {city_dto.model} data.required - city list
    */

    /**
    * get city api
    * @route GET /city/{id}
    * @group City Section - city apis
    * @param {string} id.path.required - cityuage id - eg: 0ea04144-a9b4-4280-b689-f9f157b50769
    * @returns {success_dto.model} 200 - normal response
    * @returns {not_found_dto.model} 202 - not found response
    * @returns {bad_request.model} 400 - bad request response
    * @returns {internal_error_respone.model} 500 - error response
    */
    router.get(`${DAO}/:id`, (req, res) => {
        try {
            localizedValidator.validateParams(req.params);

            const id = req.params.id;

            logger.info(`loading ${DAO} model with id: ${id}`);

            localizedService.getByIdWithLocals(id, localizedDao => {
                if (localizedDao) {
                    logger.info(`${DAO} model: ${id} loaded successfully ...`);
                    responseUtility.createSuccessResponse(res, baseLocalizedWrapper.createDTO(localizedDao));
                } else {
                    logger.info(`${DAO} model: ${id} not found`);
                    responseUtility.createNotFoundResponse(res);
                }
            });

        } catch (exception) {
            exceptionHandler.handle(res, exception);
        }
    });

    /**
     * @typedef city_body
     * @property {string} isoCode.required - city isoCode - eg: ar
     * @property {string} name.required - city name - eg: arabic
     */

    /**
    * add city api
    * @route POST /city
    * @group City Section - city apis
    * @param {city_body.model} body.body.required - cityuage body
    * @returns {success_dto.model} 201 - normal response:
    * @returns {bad_request.model} 400 - bad request response
    * @returns {internal_error_respone.model} 500 - error response
    */
    router.post(`${DAO}/`, (req, res) => {

        try {
            localizedValidator.validate(req.body);

            localizedService.save(req.body, model => {
                logger.info(`${DAO} model saved successfully ...`);
                responseUtility.createCreatedResponse(res, baseLocalizedWrapper.createDTO(model));
            }, exception => {
                exceptionHandler.handle(res, exception);
            });

        } catch (exception) {
            exceptionHandler.handle(res, exception);
        }
    });

    /**
    * add city api
    * @route PATCH /city/{id}
    * @group City Section - city apis
    * @param {city_body.model} body.body - cityuage body
    * @returns {success_dto.model} 200 - normal response
    * @returns {bad_request.model} 400 - bad request response
    * @returns {internal_error_respone.model} 500 - error response
    */
    router.patch(`${DAO}/:id`, (req, res) => {
        try {

            localizedValidator.validateParams(req.params);

            localizedValidator.validateLength(req.body);

            const id = req.params.id;

            localizedService.update(id, req.body, model => {
                logger.info(`${DAO} model ${id} updated successfully ...`);
                responseUtility.createCreatedResponse(res, baseLocalizedWrapper.createDTO(model));
            }, exception => {
                exceptionHandler.handle(res, exception);
            });

        } catch (exception) {
            exceptionHandler.handle(res, exception);
        }
    });

    /**
    * get city api
    * @route DELETE /city/{id}
    * @group City Section - city apis
    * @param {string} id.path.required - cityuage id - eg: 0ea04144-a9b4-4280-b689-f9f157b50769
    * @returns {object} 200 - eg: { "status": 200, "data": "number of deleted rows: 1" }
    * @returns {bad_request.model} 400 - bad request response
    * @returns {internal_error_respone.model} 500 - error response
    */
    router.delete(`${DAO}/:id`, (req, res) => {

        try {
            localizedValidator.validateParams(req.params);

            const id = req.params.id;

            localizedService.delete(id, deletedOwner => {
                logger.info(`${DAO} model: ${id} deleted successfully ...`);
                responseUtility.createSuccessResponse(res,
                    `number of deleted rows: ${deletedOwner}`
                );
            });

        } catch (exception) {
            exceptionHandler.handle(res, exception);
        }
    });


        /**
     * @typedef city_dto
     * @property {string} isoCode.required - city isoCode - eg: ar
     * @property {string} name.required - city name - eg: arabic
     * @property {string} id.required - model id - eg: 0ea04144-a9b4-4280-b689-f9f157b50769
     */

    /**
    * @typedef success_list_dto
    * @property {string} status.required - status code - eg: 200
    * @property {Array.<city_dto>} data.required - city list
    */

    /**
    * List all city api
    * @route GET /city
    * @group City Section - city apis
    * @returns {success_list_dto.model} 200 - normal response
    * @returns {internal_error_respone.model} 500 - error response
    */
   router.get(`/${DAO}/local`, (req, res) => {
    try {

        logger.info(`list all ${DAO} model`);

        localizedService.getAllIncludeLocals(daos => {
            var localizedDtos = daos.map(localizedDao => baseLocalizedWrapper.createDTO(localizedDao));
            responseUtility.createSuccessResponse(res, localizedDtos);
        });

    } catch (exception) {
        exceptionHandler.handle(res, exception);
    }
});

    /**
    * @typedef local_success_dto
    * @property {string} status.required - status code - eg: 200
    * @property {Array.<local_dto>} data.required - city list
    */

    /**
    * get city locals api
    * @route GET /city/{id}/local
    * @group City Section - city apis
    * @param {string} id.path.required - cityuage id - eg: 0ea04144-a9b4-4280-b689-f9f157b50769
    * @returns {local_success_dto.model} 200 - normal response
    * @returns {not_found_dto.model} 202 - not found response
    * @returns {bad_request.model} 400 - bad request response
    * @returns {internal_error_respone.model} 500 - error response
    */
    router.get(`${DAO}/:id/local`, (req, res) => {
        try {
            localizedValidator.validateParams(req.params);

            const id = req.params.id;

            logger.info(`loading ${DAO} model with id: ${id}`);

            localizedService.getByIdWithLocals(id, localizedDao => {
                if (localizedDao) {
                    logger.info(`${DAO} model: ${id} loaded successfully ...`);
                    responseUtility.createSuccessResponse(res, baseLocalizedWrapper.createDTO(localizedDao).locals || []);
                } else {
                    logger.info(`${DAO} model: ${id} not found`);
                    responseUtility.createNotFoundResponse(res);
                }
            });

        } catch (exception) {
            exceptionHandler.handle(res, exception);
        }
    });

    /**
    * @typedef localized_success_dto
    * @property {string} status.required - status code - eg: 200
    * @property {localized_dto.model} data.required - city list
    */

    /**
    * addinhg city locals api
    * @route POST /city/{id}/local
    * @group City Section - city apis
    * @param {string} id.path.required - cityuage id - eg: 0ea04144-a9b4-4280-b689-f9f157b50769
    * @returns {localized_success_dto.model} 200 - normal response
    * @returns {not_found_dto.model} 202 - not found response
    * @returns {bad_request.model} 400 - bad request response
    * @returns {internal_error_respone.model} 500 - error response
    */
    router.post(`${DAO}/:id/local`, (req, res) => {
        try {
            localizedValidator.validateParams(req.params);

            const id = req.params.id;

            logger.info(`loading ${DAO} model with id: ${id}`);

            localizedService.saveLocal(id, req.body, model => {
                logger.info(`${DAO} local model saved successfully ...`);
                responseUtility.createCreatedResponse(res, localizedWrapper.createDTO(model));
            }, exception => {
                exceptionHandler.handle(res, exception);
            });

        } catch (exception) {
            exceptionHandler.handle(res, exception);
        }
    });

    /**
    * @typedef localized_success_dto
    * @property {string} status.required - status code - eg: 200
    * @property {localized_dto.model} data.required - city list
    */

    /**
    * updating city locals api
    * @route POST /city/{id}/local/{isoCode}
    * @group City Section - city apis
    * @param {string} id.path.required - cityuage id - eg: 0ea04144-a9b4-4280-b689-f9f157b50769
    * @returns {localized_success_dto.model} 200 - normal response
    * @returns {not_found_dto.model} 202 - not found response
    * @returns {bad_request.model} 400 - bad request response
    * @returns {internal_error_respone.model} 500 - error response
    */
    router.patch(`${DAO}/:id/local/:isoCode`, (req, res) => {
        try {
            localizedValidator.validateParams(req.params);

            const id = req.params.id;

            const isoCode = req.params.isoCode;

            logger.info(`updating local ${DAO} model with id: ${id} and Local ${isoCode}`);

            localizedService.updateLocal(id, isoCode, req.body, model => {
                logger.info(`${DAO} local model saved successfully ...`);
                responseUtility.createCreatedResponse(res, localizedWrapper.createDTO(model));
            }, exception => {
                exceptionHandler.handle(res, exception);
            });

        } catch (exception) {
            exceptionHandler.handle(res, exception);
        }
    });

    /**
    * get city locals api
    * @route GET /city/{id}/local/{isoCode}
    * @group City Section - city apis
    * @param {string} id.path.required - cityuage id - eg: 0ea04144-a9b4-4280-b689-f9f157b50769
    * @param {string} isoCode.path.required - lang iso code - eg: ar
    * @returns {object} 200 - eg: { "status": 200, "data": "number of deleted rows: 1" }
    * @returns {not_found_dto.model} 202 - not found response
    * @returns {bad_request.model} 400 - bad request response
    * @returns {internal_error_respone.model} 500 - error response
    */
    router.delete(`${DAO}/:id/local/:isoCode`, (req, res) => {
        try {
            localizedValidator.validateParams(req.params);

            const id = req.params.id;

            const isoCode = req.params.isoCode;

            logger.info(`loading ${DAO} model with id: ${id}`);

            localizedService.deleteLocal(id, isoCode, deletedOwner => {
                logger.info(`${DAO} model: ${id} local: ${isoCode} deleted successfully ...`);
                responseUtility.createSuccessResponse(res,
                    `number of deleted rows: ${deletedOwner}`
                );
            });

        } catch (exception) {
            exceptionHandler.handle(res, exception);
        }
    });

    return router;
}
