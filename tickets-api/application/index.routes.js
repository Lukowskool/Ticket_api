'use strict';

class RouterBuilder {
    build(app) {  
        app.use('/customer', require('../customer/infra/routes/customer.route'));
        app.use('/customerService', require('../customerService/infra/routes/customerService.route'));
    }
}

module.exports = new RouterBuilder();