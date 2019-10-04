module.exports = (sequelize, type) => {
    AreaLocal = sequelize.define('LK_Area_Local', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        value: type.STRING
    })

    AreaLocal.modelName = 'AreaLocal';

    return AreaLocal;
}

