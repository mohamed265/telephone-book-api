module.exports = (sequelize, type) => {
    typeLocal = sequelize.define('LK_Type_Local', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        value: type.STRING
    })

    typeLocal.modelName = 'TypeLocal';

    return typeLocal;
}

