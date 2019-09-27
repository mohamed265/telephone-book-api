module.exports = (sequelize, type) => {
    countryLocal = sequelize.define('LK_Country_Local', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        value: type.STRING
    })

    countryLocal.modelName = 'CountryLocal';

    countryLocal.associate = function (models) {
        models.CountryLocal.belongsTo(models.Country, {
            as: "country",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
        models.CountryLocal.belongsTo(models.Lang, {
            as: "lang",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return countryLocal;
}

