'use strict';
let Router = require('koa-router');
let router = new Router();

require('./home.js').register(router);
{{#oauth}}
require('./auth.js').register(router);
{{/oauth}}
require('./api/index.js').register(router);
module.exports.register = function (app) {
    app.use(router.middleware());
};
