const express = require('express');

var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

var swaggerConfig = require('./utils/swaggerConfig.js')(app);

var morgan = require('./utils/morgan.js')(app);

var logger = require('./utils/logger.js');

app.get('/', (req, res) => {
    res.status(200).end("App is running...")
});

var v1 = require('./routes/v1.js');
app.use('/v1', v1);


const port = 3000;
app.listen(port, () => {
    logger.info(`Server running at http://localhost:${port}/`);
});