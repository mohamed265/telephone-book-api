const BaseDAO = require('./base/BaseDAO'); 
const Sequelize = require('Sequelize');

class Contact extends BaseDAO {
}

Contact.tableAttributes = {};

let keys = Object.keys(BaseDAO.tableAttributes);
for (let key of keys) {
    Contact.tableAttributes[key] = BaseDAO.tableAttributes[key];
}

Contact.tableAttributes.name = {
    type: Sequelize.STRING,
    allowNull: false,
    field: "name",
    set(val) {
        this.setDataValue('name', val.toUpperCase());
    },
    get() {
        return this.getDataValue('name');
    }
};

Contact.tableAttributes.number = {
    type: Sequelize.STRING,
    allowNull: false,
};

Contact.tableAttributes.address = {
    type: Sequelize.STRING,
    allowNull: true,
};

Contact.tableAttributes.longitude = {
    type: Sequelize.STRING,
    allowNull: false,
    field: "longitude"
};

Contact.tableAttributes.latitudes = {
    type: Sequelize.STRING,
    allowNull: false,
    field: "latitude"
};

Contact.tableAttributes.type = {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: "type"
};

Contact.tableAttributes.imgae = {
    type: Sequelize.TEXT,
    allowNull: false,
    field: "image"
};

Contact.init(
    Contact.tableAttributes, {
    sequelize,
    modelName: 'Contact'
});

Contact.daoName = 'Contact';
/*
Contact.tagLocals = Contact.hasMany(ContactLocal, {
    as: 'tagLocals',
    unique: false
});

Contact.belongsToMany(Lang, { through: 'LK_Contact_Local' });

Contact.includes = [
    { model: ContactLocal, as: 'tagLocals' }
];
*/

module.exports = Contact;


