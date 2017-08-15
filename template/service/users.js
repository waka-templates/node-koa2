/**
 * * Created by lee on 2017/8/15
 */
'use strict';
let db = require('../db').sequelize;
const Sequelize = require('sequelize');

module.exports = {
    getUserById: async function (id) {
        return await db.query('select * from users where id = :id', {
            replacements: {
                id: id
            },
            type: Sequelize.QueryTypes.SELECT,
            raw: true
        });
    }
};