module.exports = function (daoName) {

    return (sequelize, type) => {
        daoLocal = sequelize.define(`LK_${daoName}_Local`, {
            id: {
                type: type.UUID,
                defaultValue: type.UUIDV4,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            value: type.STRING
        })

        daoLocal.modelName = `${daoName}Local`;

        return daoLocal;
    }
}