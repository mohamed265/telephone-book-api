module.exports = (sequelize, type) => {
    type = sequelize.define('LK_Type', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        status: type.BOOLEAN
    })

    type.modelName = 'Type';

    return type;
}

