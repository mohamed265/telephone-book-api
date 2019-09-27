// ============================ ProjectData ============================
/**
 * @typedef project_data
 * @property {string} _id.required 
 * @property {string} _rev.required 
 * @property {string} name.required 
 * @property {string} industry.required 
 * @property {string} ClientName.required 
 * @property {string} ClientIcon.required 
 * @property {string} Status.required 
 * @property {string} Assigned_to_user.required 
 * @property {string} New#Implemented.required - New Implemented
 * @property {string} Conversion.required 
 * @property {string} SAP#Version.required - SAP Version
 * @property {string} FileUploadStatus.required 
 * @property {string} Version.required 
 * @property {string} ClientNameFull 
 * @property {string} SCN 
 * @property {string} systemID 
 * @property {string} creationDate 
 * @property {string} creatorName 
 */
// ============================ ProjectData ============================
// ============================ getProjectData ============================
/**
 * @typedef project_getProjectDta
 * @property {integer} response_code.required - response status - eg: 200
 * @property {string} response_message.required - response message - eg: success
 * @property {project_data.model} data.required
 */

/**
* getProjectData api for Project Data
* @route GET /api/getProjectData
* @group Project Section - project apis
* @param {string} projectName.query.required - project name - eg: TESTFOUAD
* @returns {project_getProjectDta.model} 200 - normal response: please replace # with whitespace
* @returns {object} 204 - {"response_code":204,"response_message":"data not found"}
* @returns {object} 500 - {"response_code":500,"response_message":"internal node error"}
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ getProjectData ============================
// ============================ getUserProjects ============================
/**
 * @typedef project_getUserProjects
 * @property {integer} response_code.required - response status - eg: 200
 * @property {string} response_message.required - response message - eg: success
 * @property {Array.<project_data>} data.required
 */

/**
* getUserProjects api for User Projects
* @route GET /api/getUserProjects
* @group Project Section - project apis
* @param {string} projectName.query.required - project name - eg: TESTFOUAD
* @returns {project_getUserProjects.model} 200 - normal response: please replace # with whitespace
* @returns {object} 204 - {"response_code":204,"response_message":"data not found"}
* @returns {object} 500 - {"response_code":500,"response_message":"internal node error"}
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ getUserProjects ============================
// ============================ getProjects ============================
/**
 * @typedef project_getProjects
 * @property {string} id.required
 * @property {project_data.model} key
 * @property {string} value
 */

/**
* getUserProjects api for User Projects
* @route GET /api/getProjects
* @group Project Section - project apis
* @returns {Array.<project_getProjects>} 200 - normal response: please replace # with whitespace 
* @returns {object} 404 - error string
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ getProjects ============================
// ============================ addProject ============================
/**
 * @typedef project_addProject
 * @property {boolean} ok.required
 * @property {boolean} assigned
 * @property {string} userName
 * @property {string} id
 * @property {string} rev
 */
/**
 * @typedef project_addProject_body
 * @property {string} name.required 
 * @property {string} industry.required 
 * @property {string} ClientName.required 
 * @property {string} ClientIcon.required 
 * @property {string} Status.required 
 * @property {string} Assigned_to_user.required 
 * @property {string} New#Implemented.required - New Implemented
 * @property {string} Conversion.required 
 * @property {string} SAP#Version.required - SAP Version
 * @property {string} FileUploadStatus.required 
 * @property {string} Version.required 
 * @property {string} ClientNameFull 
 * @property {string} SCN 
 * @property {string} systemID 
 * @property {string} creationDate 
 * @property {string} creatorName 
 */
/**
* addProject api for adding Project
* @route POST /api/addProject
* @group Project Section - project apis
* @param {project_addProject_body.model} body.body.required - user object please replace # with whitespace 
* @returns {project_addProject.model} 200 - normal response: please replace # with whitespace 
* @returns {object} 500 - error string
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ addProject ============================

// ============================ editProject ============================
/**
 * @typedef project_editProject_success
 * @property {boolean} ok.required
 * @property {string} id
 * @property {string} rev
 */
/**
 * @typedef project_editProject_error
 * @property {integer} status.required
 * @property {string} error - error message - eg: SCN not unique
 * @property {boolean} SCN
 */

/**
* editProject api for editing Project
* @route POST /api/editProject
* @group Project Section - project apis
* @param {project_data.model} body.body.required - user object please replace # with whitespace 
* @returns {project_editProject_success.model} 200 - normal response: 
* @returns {project_editProject_error.model} 200 duplicate data - scn already exists 
* @returns {object} 500 - error string
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ editProject ============================

// ============================ deleteProject ============================
/**
 * @typedef project_deleteProject_success
 * @property {boolean} ok.required
 * @property {string} id
 * @property {string} rev
 */
/**
 * @typedef project_deleteProject_body
 * @property {string} projectName
 */
/**
/**
* deleteProject api for deleting Project
* @route POST /api/deleteProject
* @group Project Section - project apis
* @param {project_deleteProject_body.model} body.body.required - user object please replace # with whitespace 
* @returns {project_deleteProject_success.model} 200 - normal response: 
* @returns {object} 500 - error string
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ deleteProject ============================
// ============================ getProjectDataInSession ============================
/**
 * @typedef project_getProjectDataInSession_success
 * @property {string} projName.required 
 * @property {string} sapVersion.required 
 * @property {string} industry.required 
 * @property {string} clientName.required 
 * @property {string} clientNameFull.required 
 * @property {string} systemID.required 
 * @property {string} clientLogo.required 
 * @property {string} creationDate.required 
 * @property {string} userRole.required 
 */

/**
* getProjectDataInSession api for Project Data
* @route GET /api/getProjectDataInSession
* @group Project Section - project apis
* @returns {project_getProjectDataInSession_success.model} 200 - normal response:
* @returns {object} 200 error - error string
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ getProjectDataInSession ============================
// ============================ setProjectDataInSession ============================
/**
 * @typedef project_setProjectDataInSession_success
 * @property {string} projName.required 
 * @property {string} sapVersion.required 
 * @property {string} industry.required 
 * @property {string} clientName.required 
 * @property {string} clientNameFull.required 
 * @property {string} systemID.required 
 * @property {string} clientLogo.required 
 * @property {string} creationDate.required 
 * @property {string} userRole.required 
 */
/**
* setProjectDataInSession api for Project Data
* @route POST /api/setProjectDataInSession
* @group Project Section - project apis
* @param {project_setProjectDataInSession_success.model} body.body.required 200 - normal response:
* @returns {string} 200 - eg: success save project data in session
* @returns {string} 200 error - eg: error save project data in session
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ setProjectDataInSession ============================
// ============================ getActiveProjectList ============================
/**
 * @typedef project_getActiveProjectList_success
 * @property {integer} total_rows.required 
 * @property {integer} offset.required 
 * @property {Array.<project_getProjects>} rows.required 
 */
/**
* getActiveProjectList api for Project Data
* @route GET /api/getActiveProjectList
* @group Project Section - project apis
* @returns {project_getActiveProjectList_success.model} 200 - normal response
* @returns {string} 200 error - eg: ERROR
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ getActiveProjectList ============================
// ============================ fetchReviewedFileListMysql ============================
/**
 * @typedef project_fetchReviewedFileListMysql_success
 * @property {integer} Total.required  
 * @property {Array.<project_fetchReviewedFileListMysql_success_FileList>} FileList.required 
 */
/**
 * @typedef project_fetchReviewedFileListMysql_success_FileList
 * @property {string} FileName.required  
 * @property {string} OriginalFileName.required 
 */
/**
* getActiveProjectList api for Project Data
* @route GET /fetchReviewedFileListMysql
* @group Project Section - project apis
* @param {string} project.query.required - project name - eg: TESTFOUAD
* @returns {project_fetchReviewedFileListMysql_success.model} 200 - normal response
* @returns {string} 200 error - eg: error get project files
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ fetchReviewedFileListMysql ============================

// ============================ uploadTransformationFIles ============================
/**
 * @typedef project_uploadTransformationFIles_body
 * @property {string} userID.required  
 * @property {string} projectName.required  
 * @property {string} dashboardCategory.required  
 * @property {string} originalFileName.required  
 * @property {binary} browsefile.required  
 * @property {string} stdFileName.required  
 * @property {string} clientName.required  
 */

/**
 * @typedef project_uploadTransformationFIles_response
 * @property {string} currentFileId.required  
 */

/**
* uploadTransformationFIles api for Project Data
* @route POST /uploadTransformationFIles
* @group Project Section - project apis
* @param {string} clientName.query.required
* @consumes multipart/form-data
* @param {project_uploadTransformationFIles_body.model} body.body.required - please note this body in formdata formate
* @returns {project_uploadTransformationFIles_response.model} 200 - 
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ uploadTransformationFIles ============================
// ============================ checkCurrentFileUploadStatus ============================
/**
 * @typedef project_checkCurrentFileUploadStatus_error
 * @property {Array.<string>} duplicateColumns.required  
 * @property {Array.<string>} errorCodes.required  
 * @property {project_checkCurrentFileUploadStatus_error_errorDescription.model} errorDescription.required  
 * @property {string} fileName.required  
 * @property {Array.<string>} missedColumns.required  
 * @property {string} sheetName.required  
 * @property {Array.<string>} wrongOccurrenceColumn.required  
 * @property {Array.<integer>} wrongOccurrenceCount.required  
 */
/**
 * @typedef project_checkCurrentFileUploadStatus_error_errorDescription
 * @property {Array.<string>} Invalid#Column#Header.required - please replace # with whitespace
 */


/**
 * checkCurrentFileUploadStatus api for Project Data
* @route GET /checkCurrentFileUploadStatus
* @group Project Section - project apis
* @param {string} fileId.query.required
* @returns {string} 200 - eg: ok
* @returns {string} 200 still uploading - eg: still uploading
* @returns {Array.<project_checkCurrentFileUploadStatus_error>} 200 error : please replace # with whitespace
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ checkCurrentFileUploadStatus ============================
// ============================ retreiveOutputProjectFileList ============================
/**
 * @typedef projectretreiveOutputProjectFileList_body
 * @property {string} projectName.required
 */
/**
 * @typedef project_retreiveOutputProjectFileList_success_FileList
 * @property {string} FileName.required  
 * @property {string} OriginalFileName.required 
 */
/**
 * retreiveOutputProjectFileList api for Project Data
* @route POST /retreiveOutputProjectFileList
* @group Project Section - project apis
* @param {projectretreiveOutputProjectFileList_body.model} body.body.required
* @returns {Array.<project_retreiveOutputProjectFileList_success_FileList>} 200
* @returns {string} 200 error - eg: Problem while connecting the database, Please try after some time.
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ checkCurrentFileUploadStatus ============================
// ============================ exportpowerpointpresentation ============================
/**
 * exportpowerpointpresentation api for Project Data
* @route GET /exportpowerpointpresentation
* @group Project Section - project apis
* @param {string} project.query.required
* @param {string} industry.query.required
* @param {string} clientName.query.required
* @param {string} sapVersion.query.required
* @param {string} systemID.query.required
* @param {string} creationDate.query.required
* @param {string} clientNameFull.query.required
* @returns {binary} 200
* @returns {string} 200 error - eg: Problem while connecting the database, Please try after some time.
* @returns {object} 200 authentication - { success: false, message: 'Failed to authenticate token....', status: 403 } 
* @security JWT
*/
// ============================ exportpowerpointpresentation ============================