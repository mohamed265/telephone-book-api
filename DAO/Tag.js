module.exports = (sequelize, type) => {
    tag = sequelize.define('LK_Tag', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        status: type.BOOLEAN
    })

    tag.modelName = 'Tag';

    return tag;
}

