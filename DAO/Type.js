module.exports = (sequelize, type) => {
    type = sequelize.define('LK_Type', {
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

    type.modelName = 'Type';

    return type;
}

