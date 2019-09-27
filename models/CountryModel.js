
const LocalizedModel = require('./Base/LocalizedModel');

class CountryModel extends LocalizedModel { 

    static createModel() {
        return new CountryModel();
    }

    constructor() { 
        super();
    }
}


module.exports = CountryModel;