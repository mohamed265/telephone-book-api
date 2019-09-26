module.exports = (sequelize, type) => {
    lang = sequelize.define('LK_Lang', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        status: type.BOOLEAN
    })

    lang.modelName = 'Lang';

    return lang;
}

