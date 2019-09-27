module.exports = (sequelize, type) => {
    lang = sequelize.define('LK_Lang', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        key: {
            type: type.UUID,
            allowNull: false,
            unique: true
        },
        isoCode: {
            type: type.STRING,
            unique: true
        },
        name: type.STRING
    })

    lang.modelName = 'Lang';

    return lang;
}

