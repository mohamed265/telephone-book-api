module.exports = (sequelize, type) => {
    country = sequelize.define('LK_Country', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        status: type.BOOLEAN
    })

    country.modelName = 'Country';

    return country;
}

