module.exports = (sequelize, type) => {
    Area = sequelize.define('LK_Area', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: type.STRING
    })

    Area.modelName = 'Area';

    return Area;
}

