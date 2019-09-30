module.exports = (sequelize, type) => {
    Contact = sequelize.define('Contact', {
        id: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            primaryKey: true,
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
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
        models.Contact.belongsTo(models.City, { 
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
        models.Contact.belongsTo(models.Country, { 
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });
        models.Contact.belongsTo(models.Type, { 
            onDelete: "RESTRICT",
            foreignKey: {
                allowNull: false
            }
        });

        // models.Contact.belongsToMany(models.Lang, { through: 'LK_Area_Local' });
        // models.Contact.belongsToMany(models.Lang, { through: 'LK_City_Local' });
        // models.Contact.belongsToMany(models.Lang, { through: 'LK_Country_Local' });
        // models.Contact.belongsToMany(models.Lang, { through: 'LK_Tag_Local' });
        // models.Contact.belongsToMany(models.Lang, { through: 'LK_Type_Local' });
    };

    return Contact;
}

