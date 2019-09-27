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

    AreaLocal.associate = function (models) {
        models.AreaLocal.belongsTo(models.Area, {
            as: "area",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
        models.AreaLocal.belongsTo(models.Lang, {
            as: "lang",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
    };

    AreaLocal.modelName = 'AreaLocal';

    return AreaLocal;
}

