'use strict';
const Sequelize = require('sequelize');
let config = require('../../lib/config');
let dbOptions = config.getDbConfig();
const client = new Sequelize(
    dbOptions.database,
    dbOptions.username,
    dbOptions.password, {
        host: dbOptions.host,
        dialect: dbOptions.dialect,
        port: dbOptions.port,
        pool: dbOptions.pool,
        logging: true
    });

module.exports = client;