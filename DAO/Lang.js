const Sequelize = require('Sequelize');

class Lang extends Sequelize.Model {

    get isoCode() {
        return this.isoCode;
    }

    set isoCode(isoCode) {
        this.setDataValue('isoCode', isoCode);
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.setDataValue('name', name);
    }
}

Lang.init({
    isoCode: {
        type: Sequelize.UUID,
        unique: true,
        primaryKey: true,
        allowNull: false,
        // defaultValue: Sequelize.UUIDV1
    },
    name: Sequelize.STRING
}, {
    sequelize,
    modelName: 'LK_Lang'
});


module.exports = Lang;