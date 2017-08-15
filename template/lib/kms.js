/*
 * 读取kms秘钥
 */
'use strict';

const KMS = require('@mx/kms');

module.exports = function(appKey, keyName) {
    return KMS.getKeyByName(appKey, keyName);
};
