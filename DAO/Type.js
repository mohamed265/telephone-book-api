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

    type.associate = function (models) {
        models.Type.hasMany(models.TypeLocal);
        models.Type.belongsToMany(models.Lang, { through: 'LK_Type_Local' });
    };

    return type;
}

