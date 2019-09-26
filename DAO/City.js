module.exports = (sequelize, type) => {
    city = sequelize.define('LK_City', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        status: type.BOOLEAN
    })

    city.modelName = 'City';

    return city;
}

