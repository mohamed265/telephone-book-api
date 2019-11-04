const BaseDAO = require('./base/BaseDAO');
const Tag = require('./Tag');
const Contact = require('./Contact');
const Sequelize = require('Sequelize');

class ContactTags extends BaseDAO {
}

ContactTags.tableAttributes = BaseDAO.tableAttributes;

ContactTags.init(
    ContactTags.tableAttributes, {
    sequelize,
    modelName: 'Contact_Tags'
});

Contact.daoName = 'ContactTags';

ContactTags.belongsTo(Contact, {
    as: "contact",
    onDelete: "RESTRICT",
    foreignKey: {
        allowNull: false
    }
});

ContactTags.belongsTo(Tag, {
    as: "tag",
    onDelete: "RESTRICT",
    foreignKey: {
        allowNull: false
    }
});

module.exports = ContactTags;