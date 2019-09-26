module.exports = (sequelize, type) => {
    Area = sequelize.define('LK_Area', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING,
        status: type.BOOLEAN
    })

    Area.modelName = 'Area';
    
    return Area;
}

