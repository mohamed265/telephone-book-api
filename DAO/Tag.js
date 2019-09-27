module.exports = (sequelize, type) => {
    tag = sequelize.define('LK_Tag', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        key: {
            type: type.UUID,
            allowNull: false,
            unique: true
        },
        name: type.STRING
    })

    tag.modelName = 'Tag';

    return tag;
}

