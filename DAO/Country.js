module.exports = (sequelize, type) => {
    country = sequelize.define('LK_Country', {
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
        name: type.STRING
    })

    country.modelName = 'Country';

    return country;
}

