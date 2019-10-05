const Sequelize = require('Sequelize');
const Lang = require('../Lang');

class BaseLocalValueDAO extends Sequelize.Model {

    get id() {
        return this.id;
    }

    set id(id) {
        this.setDataValue('id', id);
    }

    get isoCode() {
        return this.isoCode;
    }

    set isoCode(isoCode) {
        this.setDataValue('isoCode', isoCode);
    }

    get value() {
        return this.value;
    }

    set value(value) {
        this.setDataValue('value', value);
    }
}

BaseLocalValueDAO.tableAttributes = {
    id: {
        type: Sequelize.UUID,
        unique: true,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1
    },
    // isoCode: {
    //     type: Sequelize.UUID,
    //     allowNull: false,
    //     references: {
    //         model: Lang,
    //         key: 'iso_code'
    //     }
    // },
    value: {
        type: Sequelize.STRING,
        allowNull: false,
    },
};

module.exports = BaseLocalValueDAO;