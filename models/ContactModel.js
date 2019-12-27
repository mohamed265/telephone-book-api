
const StatusBaseModel = require('./Base/BaseModel');

class ContactModel extends StatusBaseModel {

    static createModel() {
        return new ContactModel();
    }

    constructor() {
        super();
        this.name = "";
        this.number = "";
        this.address = "";
        this.longitude = "";
        this.latitudes = "";
        this.type = "";
        this.imgae = "";
        this.l_k_area_id = "";
        this.l_k_city_id = "";
        this.l_k_governorate_id = "";
        this.tags = [];
    }
}


module.exports = ContactModel;