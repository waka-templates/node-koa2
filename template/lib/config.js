'use strict';
let config = require('../config.js');
let env = process.env.NODE_ENV || 'development';
const getPrivateKey = require('./kms');

module.exports = {
{{#mysql}}
    getDbConfig: function(){
        return config[env].db;
    },
{{/mysql}}
{{#tair}}
    getTairConfig: function () {
        return config[env].tair;
    },
{{/tair}}
{{#sentry}}
    getSentryDSN:function(){
        return config.SENTRY_DSN;
    },
{{/sentry}}
    getEnv: function () {
        return env;
    },
    getDbPassword:function() {
        // 密码周期1800秒
        return getPrivateKey('com.sankuai.xm.neixin.quality','db.password');
    }
};