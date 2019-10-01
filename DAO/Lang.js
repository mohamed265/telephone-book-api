module.exports = (sequelize, type) => {
    lang = sequelize.define('LK_Lang', {
        isoCode: {
            type: type.STRING,
            unique: true,
            primaryKey: true,
            allowNull: false,
            get: function () {
                return this.getDataValue('isoCode').toLowerCase();
            }
        },
        name: type.STRING
    }, {
        setterMethods: {
            isoCode: function (value) {
                return this.setDataValue('isoCode', value.toString().toLowerCase());
            },
        }
    })

    lang.modelName = 'Lang';

    return lang;
}

