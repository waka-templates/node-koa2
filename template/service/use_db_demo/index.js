/*
    简单演示数据库操作方法, 更多用法参见http://docs.sequelizejs.com
*/

'use strict';
let db = require('../db');
const Sequelize = require('sequelize');
module.exports = {
    getUserById: async function (id) {
        return await db.query('select * from udb where id = :id', {
            replacements: {
                id: id
            },
            type: Sequelize.QueryTypes.SELECT,
            raw: true
        });
    }
};