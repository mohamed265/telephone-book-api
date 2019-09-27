module.exports = (sequelize, type) => {
    city = sequelize.define('LK_City', {
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

    city.modelName = 'City';

    return city;
}

