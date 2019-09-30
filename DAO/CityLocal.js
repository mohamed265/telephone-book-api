module.exports = (sequelize, type) => {
    cityLocal = sequelize.define('LK_City_Local', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        value: type.STRING
    })

    cityLocal.modelName = 'CityLocal';

    return cityLocal;
}

