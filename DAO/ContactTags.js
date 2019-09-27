module.exports = (sequelize, type) => {
    ContactTags = sequelize.define('Contact_Tags', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
    });

    ContactTags.modelName = 'ContactTags';

    ContactTags.associate = function (models) {
        models.ContactTags.belongsTo(models.Contact, {
            as: "contact",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
        models.ContactTags.belongsTo(models.Tag, {
            as: "tag",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return ContactTags;
}

