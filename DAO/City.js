module.exports = (sequelize, type) => {
    city = sequelize.define('LK_City', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: type.STRING
    })

    city.modelName = 'City';

    return city;
}
