module.exports = function (daoName) {

    return (sequelize, type) => {
        dao = sequelize.define(`LK_${daoName}`, {
            id: {
                type: type.UUID,
                defaultValue: type.UUIDV4,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            name: type.STRING
        })

        dao.modelName = `${daoName}`;

        dao.associate = function (models) {

            models[`${daoName}`].locals = models[`${daoName}`].hasMany(models[`${daoName}Local`], {
                as: 'locals',
                unique: false
            });

            models[`${daoName}`].belongsToMany(models.Lang, { through: `LK_${daoName}Local` });
        };

        return dao;
    }
}