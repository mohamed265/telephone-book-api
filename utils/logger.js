const { createLogger, format, transports } = require('winston');

var fs = require('fs');

var path = require('path');

const level = process.env.LOG_LEVEL || 'debug';

const logDir = 'logs';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logFile = path.join(logDir, 'log.log');
const errorFile = path.join(logDir, 'error.log');

var getNamespace = require('continuation-local-storage').getNamespace;


var myFormat = format.combine(
    format.colorize(),
    format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
    }),
    // format.label({ reqId: 'requestId not found' }),
    format.printf(info => `[${info.timestamp}] ${info.message}`)
);

const winstonLogger = createLogger({
    transports: [
        new transports.Console({
            level: level,
            format: myFormat
        }),
        new transports.File({
            format: myFormat,
            filename: logFile
        }),
        new transports.File({
            format: myFormat,
            filename: errorFile,
            level: 'error'
        })
    ],
    exitOnError: false, // do not exit on handled exceptions
});

// module.exports = logger


var winston = require('winston');

var getNamespace = require('continuation-local-storage').getNamespace;

// Wrap Winston logger to print reqId in each log
var formatMessage = function (level, message) {
    var reqId = getNamespace('my request').get('requestId');
    var msg = "[" + level + "] [" + path.basename(process.mainModule.filename) + "] ";
    msg += reqId ? "[" + reqId + "]: " + message : message;
    return msg;
};

var logger = {
    log: function (level, message) {
        winstonLogger.log(level, formatMessage(message));
    },
    error: function (message) {
        winstonLogger.error(formatMessage("ERROR", message));
    },
    warn: function (message) {
        winstonLogger.warn(formatMessage("WARN", message));
    },
    verbose: function (message) {
        winstonLogger.verbose(formatMessage("VERBOSE", message));
    },
    info: function (message) {
        winstonLogger.info(formatMessage("INFO", message));
    },
    debug: function (message) {
        winstonLogger.debug(formatMessage("DEBUG", message));
    },
    silly: function (message) {
        winstonLogger.silly(formatMessage("SILLY", message));
    }
};
module.exports = logger;