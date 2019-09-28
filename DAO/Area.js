module.exports = (sequelize, type) => {
    area = sequelize.define('LK_Area', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: type.STRING
    })

    area.modelName = 'Area';
    
    area.associate = function (models) {
        models.Area.hasMany(models.AreaLocal);
        models.Area.belongsToMany(models.Lang, { through: 'LK_Area_Local' });
    };

    return area;
}

