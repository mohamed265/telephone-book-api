const Sequelize = require('Sequelize');

DBCredentials = require('./DBCredentials.json');

// Option 1: Passing parameters separately

global.sequelize = new Sequelize(DBCredentials['database'], DBCredentials['user'], DBCredentials['password'], {
    host: DBCredentials['host'],
    port: DBCredentials['port'],
    dialect: DBCredentials['dialect'],
    define: {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: true,

        // don't delete database entries but set the newly added attribute deletedAt
        // to the current date (when deletion was done). paranoid will only work if
        // timestamps are enabled
        paranoid: true,

        // don't use camelcase for automatically added attributes but underscore style
        // so updatedAt will be updated_at
        underscored: true,

        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,
    },
    pool: {
        max: 1,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})


global.sync = function () {
    sequelize.sync({ force: true })
        .then(() => {
            console.log(`Database & tables created!`)
        });
}

module.exports.sequelizeExport = function () { return sequelize };