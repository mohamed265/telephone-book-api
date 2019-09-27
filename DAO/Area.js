module.exports = (sequelize, type) => {
    Area = sequelize.define('LK_Area', {
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

    Area.modelName = 'Area';

    return Area;
}

