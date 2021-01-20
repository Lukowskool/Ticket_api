'use strict';

class RouterBuilder {
    build(app) {  
        app.use('/tickets', require('./tickets.route'));
    }
}

module.exports = new RouterBuilder();