module.exports = (sequelize, type) => {
    country = sequelize.define('LK_Country', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: type.STRING
    })

    country.modelName = 'Country';

    return country;
}

