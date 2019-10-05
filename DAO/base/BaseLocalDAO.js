const Sequelize = require('Sequelize');

class BaseLocalDAO extends Sequelize.Model {

    get id() {
        return this.id;
    }

    set id(id) {
        this.setDataValue('id', id);
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.setDataValue('name', name);
    }
}

BaseLocalDAO.tableAttributes = {
    id: {
        type: Sequelize.UUID,
        unique: true,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV1
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
};

module.exports = BaseLocalDAO;