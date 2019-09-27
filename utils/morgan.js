var fs = require('fs');

var path = require('path');

var morgan = require('morgan');

var rfs = require('rotating-file-stream');

var uuid = require('node-uuid')

var createNamespace = require('continuation-local-storage').createNamespace;

var myRequest = createNamespace('my request');

module.exports = function (app) {

    app.use(assignId)

    var logDirectory = path.join(__dirname, '../logs')

    // ensure log directory exists
    fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

    // create a rotating write stream
    var logsLogStream = rfs('access.log', {
        interval: '1d', // rotate daily
        path: logDirectory
    })

    morgan.token('id', (req) => req.id)
    // morgan.token('id', (req) => req.id.split('-')[0])

    function assignId(req, res, next) {
        req.id = uuid.v4()
        myRequest.run(function () {
            myRequest.set('requestId', req.id);
            next();
        });
    }

    // setup the logger 
    var format = '[:date[iso]] #:id - :remote-addr - ":method :url" :status :res[content-length] in :response-time ms';

    app.use(morgan(format));

    app.use(morgan(format, { stream: logsLogStream }));

    return morgan;
};


