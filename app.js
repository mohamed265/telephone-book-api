const express = require('express');

var bodyParser = require('body-parser');

var daos = require('./DAO');
var models = require('./models');

// sequelize.sync({ force: true })
//     .then(() => {
//         console.log(`Database & tables created!`)
// })

const port = 3000;

const app = express();
app.use(bodyParser.json());

var morgan = require('./utils/morgan.js')(app);
var logger = require('./utils/logger.js');

app.listen(port, () => {
    console.info(`Server running at http://localhost:${port}/`);
});

var getNamespace = require('continuation-local-storage').getNamespace;
app.get('/', (req, res) => {
    res.status(200).end("App is running...")
});

app.get('/', (req, res) => {
    daos.Answers.findAll({ include: [daos.Questionnaire] }).then(answers => res.json(answers))
});

app.get('/questionnaire', (req, res) => {
    daos.Questionnaire.findAll({ include: [daos.Answers] }).then(questionnaire => res.json(questionnaire))
});

app.get('/count', (req, res) => {
    daos.Answers.count().then(answers => res.json(answers))
});

app.get('/where', (req, res) => {
    daos.Answers.findAll({ where: { answerValue: { [Sequelize.Op.like]: '%i%' } }, limit: 1 }).then(answers => res.json(answers))
});

app.get('/group', (req, res) => {
    daos.Answers.count({ attributes: ['answerValue'], group: ['answerValue'] }).then(answers => res.json(answers))
});

//a.use('/child', child ); 




// const express = require('express');
// var bodyParser = require('body-parser');

// const port = 8080;

// const app = express();
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.status(200).end("App is running...")
// });

// app.listen(port, () => {
//     console.info(`Server running at http://localhost:${port}/`);
// });

// const child = require('./routes/child.js');
// app.use('/child', child);