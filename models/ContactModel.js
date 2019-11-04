
const StatusBaseModel = require('./Base/BaseModel');

class ContactModel extends StatusBaseModel {

    static createModel() {
        return new ContactModel();
    }

    constructor() {
        super();
        this.number = "";
        this.address = "";
        this.longitude = "";
        this.latitudes = "";
        this.type = "";
        this.imgae = "";
        this.tags = [];
    }
}


module.exports = ContactModel;