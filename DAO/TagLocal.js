module.exports = (sequelize, type) => {
    tagLocal = sequelize.define('LK_Tag_Local', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        value: type.STRING
    })

    tagLocal.modelName = 'TagLocal';

    tagLocal.associate = function (models) {
        models.TagLocal.belongsTo(models.Tag, {
            as: "tag",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
        models.TagLocal.belongsTo(models.Lang, {
            as: "lang",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return tagLocal;
}
