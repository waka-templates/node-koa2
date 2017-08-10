/**
 * @Creator: Liuyanqing
 * @Date: 3/14/17
 */
'use strict';
let render = require('../lib/render.js');
let service = require('../service/index');
{{#tair}}
let tair = require('../lib/tair');
{{/tair}}
{{#sentry}}
let sentry = require('../lib/sentry');
{{/sentry}}
module.exports.register = function (app) {
    app.render = render;
    app.service = service;
    {{#tair}}
    app.tair = tair;
    {{/tair}}
    {{#sentry}}
    app.sentry = sentry;
    {{/sentry}}
};

