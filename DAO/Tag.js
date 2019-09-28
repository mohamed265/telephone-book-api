module.exports = (sequelize, type) => {
    tag = sequelize.define('LK_Tag', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        name: type.STRING
    })

    tag.modelName = 'Tag';
    
    tag.associate = function (models) {
        models.Tag.hasMany(models.TagLocal);
        models.Tag.belongsToMany(models.Lang, { through: 'LK_Tag_Local' });
    };

    return tag;
}

