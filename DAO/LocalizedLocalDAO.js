module.exports = function (daoName) {

    return (sequelize, type) => {

        var modelName = `LK_${daoName}`;

        daoLocal = sequelize.define(`LK_${daoName}_Local`, {
            id: {
                type: type.UUID,
                defaultValue: type.UUIDV4,
                primaryKey: true,
                allowNull: false,
                unique: true
            },
            value: type.STRING,
            // isoCode: {
            //     type: type.UUID,
            //     allowNull: false,
            //     references: {
            //         model: modelName,
            //         key: 'id'
            //     }
            // }
        })

        daoLocal.modelName = `${daoName}Local`;

        return daoLocal;
    }
}