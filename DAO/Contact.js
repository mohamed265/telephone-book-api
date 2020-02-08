const BaseDAO = require('./base/BaseDAO');
const Sequelize = require('Sequelize');
const ContactTags = require('./ContactTags');
const Tag = require('./Tag');

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
    field: "name"
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
    allowNull: true,
    field: "longitude"
};

Contact.tableAttributes.latitudes = {
    type: Sequelize.STRING,
    allowNull: true,
    field: "latitude"
};

Contact.tableAttributes.type = {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: "type"
};

Contact.tableAttributes.image = {
    type: Sequelize.TEXT,
    allowNull: true,
    field: "image"
};

Contact.tableAttributes.description = {
    type: Sequelize.STRING,
    allowNull: true,
    field: "description"
};

Contact.init(
    Contact.tableAttributes, {
    sequelize,
    modelName: 'Contact'
});

Contact.daoName = 'Contact';
 

Contact.contactTags = Contact.hasMany(ContactTags, {
    as: 'contactTags',
    unique: false
});

Contact.belongsToMany(Tag, { through: 'Contact_Tags' });

Contact.includes = [
    { model: ContactTags, as: 'contactTags' }
];
module.exports = Contact;


