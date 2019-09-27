module.exports = (sequelize, type) => {
    lang = sequelize.define('LK_Lang', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
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

