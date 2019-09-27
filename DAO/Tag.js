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

    return tag;
}

