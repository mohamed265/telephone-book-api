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

        models.City.locals = models.City.hasMany(models.CityLocal, {
            as: 'locals',
            unique: false
        });

        models.City.belongsToMany(models.Lang, { through: 'LK_City_Local', unique: false });
    };

    return city;
}

