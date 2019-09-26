module.exports = (sequelize, type) => {
    cityLocal = sequelize.define('LK_City_Local', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value: type.STRING
    })

    cityLocal.modelName = 'CityLocal';

    cityLocal.associate = function (models) {
        models.CityLocal.belongsTo(models.City, {
            as: "city",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
        models.CityLocal.belongsTo(models.Lang, {
            as: "lang",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return cityLocal;
}

