module.exports = (sequelize, type) => {
    typeLocal = sequelize.define('LK_Type_Local', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value: type.STRING
    })

    typeLocal.modelName = 'TypeLocal';

    typeLocal.associate = function (models) {
        models.TypeLocal.belongsTo(models.Type, {
            as: "type",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
        models.TypeLocal.belongsTo(models.Lang, {
            as: "lang",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return typeLocal;
}

