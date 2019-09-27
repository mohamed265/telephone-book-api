
const StatusBaseModel = require('./Base/BaseModel');

class ContactModel extends StatusBaseModel { 

    static createModel() {
        return new ContactModel();
    }

    constructor() { 
        super();
        this.number = "";
        this.address = "";
        this.tags = [];
    }
}


module.exports = ContactModel;