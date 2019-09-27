module.exports = (sequelize, type) => {
    type = sequelize.define('LK_Type', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: type.STRING
    })

    type.modelName = 'Type';

    return type;
}

