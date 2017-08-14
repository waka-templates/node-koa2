'use strict';
const tair_client = require('@mtfe/node-tair');
let config = require('./config');
let tairConfig = config.getTairConfig();
let namespace = tairConfig.namespace;
let expire = 0;
let tair = new tair_client(tairConfig.group, tairConfig.server, function (err) {
    if (err) {
        console.log('创建tair客户端失败:', err);
    }
});

// 建议在这里统一对缓存key添加前缀, 避免冲突
// eg: let prefix = 'web_staging_';
// 然后在下面每个方法中，设置 key = prefix + key;

module.exports = {
    getCache: function (key) {
        return new Promise(function (resolve, reject) {
            tair.get(key, namespace, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    data = JSON.parse(data);
                    resolve(data);
                }
            });
        });
    },
    setCache: function (key, value, options) {
        value = JSON.stringify(value);
        options = options || {};
        return new Promise(function (resolve, reject) {
            tair.set(key, value, options.expire || expire, namespace, function (err, isSuccess) {
                if (isSuccess) {
                    resolve(isSuccess);
                } else {
                    reject(err);
                }
            });
        });
    },
    removeCache: function (key) {
        return new Promise(function (resolve, reject) {
            tair.remove(key, namespace, function (err, isSuccess) {
                if (err) {
                    reject(err);
                } else {
                    resolve(isSuccess);
                }
            });
        });
    }
};