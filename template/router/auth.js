'use strict';
let auth = async function (ctx) {
    console.log(ctx.state);
    if(ctx.state.oauth.auth.access_token){
        ctx.cookies.set(`nx_access_token`,ctx.state.oauth.auth.access_token);
        ctx.redirect('/home/swig')
    }else{
        ctx.body = '有问题'
    }
}
module.exports.register = function (router) {
    router.get('/oauth/callback',auth);
};
