module.exports = (sequelize, type) => {
    city = sequelize.define('LK_City', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: type.STRING
    })

    city.modelName = 'City';

    city.associate = function (models) {
        models.City.hasMany(models.CityLocal);
        models.City.belongsToMany(models.Lang, { through: 'LK_City_Local' });
    };

    return city;
}

