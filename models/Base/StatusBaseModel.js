var BaseModel = require('./BaseModel');

class StatusBaseModel extends BaseModel {

    static createModel() {
        return new StatusBaseModel();
    }

    constructor() {
        super();
        this.status = true;
    }
}


module.exports = StatusBaseModel;