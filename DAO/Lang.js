module.exports = (sequelize, type) => {
    lang = sequelize.define('LK_Lang', {
        isoCode: {
            type: type.STRING,
            unique: true,
            primaryKey: true,
            allowNull: false,
        },
        name: type.STRING
    })

    lang.modelName = 'Lang';

    return lang;
}

