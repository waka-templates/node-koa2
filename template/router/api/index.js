'use strict';

function formatResults(res) {
    return { rescode: 0, data: res };
}

let auth = async function(ctx) {
    const id = ctx.params.id;
    let res = await ctx.service.users.getUserById(id);
    ctx.body = formatResults(res[0] || {});
};

module.exports.register = function(router) {
    router.get('/api/users/:id', auth);
};