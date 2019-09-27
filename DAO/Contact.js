module.exports = (sequelize, type) => {
    Contact = sequelize.define('Contact', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        key: {
            type: type.UUID,
            allowNull: false,
            unique: true
        },
        name: {
            type: type.STRING,
            allowNull: false,
            field: "name",
            set(val) {
                this.setDataValue('name', val.toUpperCase());
            },
            get() {
                return this.getDataValue('name');
            }
        },
        number: {
            type: type.STRING,
            allowNull: false,
        },
        address: {
            type: type.STRING,
            allowNull: true,
        }
    });

    Contact.modelName = 'Contact';

    Contact.associate = function (models) {
        models.Contact.belongsTo(models.Area, {
            as: "area",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
        models.Contact.belongsTo(models.City, {
            as: "city",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
        models.Contact.belongsTo(models.Country, {
            as: "country",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
        models.Contact.belongsTo(models.Type, {
            as: "type",
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Contact;
}

