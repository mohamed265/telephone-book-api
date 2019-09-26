const express = require('express');
var bodyParser = require('body-parser');

var models = require('./DAO');

sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    })

const port = 8080;
const app = express();
app.use(bodyParser.json());

app.listen(port, () => {
    console.info(`Server running at http://localhost:${port}/`);
});

app.get('/', (req, res) => {
    res.status(200).end("App is running...")
});

app.get('/', (req, res) => {
    models.Answers.findAll({ include: [models.Questionnaire] }).then(answers => res.json(answers))
});

app.get('/questionnaire', (req, res) => {
    models.Questionnaire.findAll({ include: [models.Answers] }).then(questionnaire => res.json(questionnaire))
});

app.get('/count', (req, res) => {
    models.Answers.count().then(answers => res.json(answers))
});

app.get('/where', (req, res) => {
    models.Answers.findAll({ where: { answerValue: { [Sequelize.Op.like]: '%i%' } }, limit: 1 }).then(answers => res.json(answers))
});

app.get('/group', (req, res) => {
    models.Answers.count({ attributes: ['answerValue'], group: ['answerValue'] }).then(answers => res.json(answers))
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