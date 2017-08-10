'use strict';
var auth = async function (ctx) {
    console.log(this.state);
    if(this.state.oauth.auth.access_token){
        this.cookies.set(`nx_access_token`,this.state.oauth.auth.access_token);
        this.redirect('/home/swig')
    }else{
        ctx.body = '有问题'
    }
}
module.exports.register = function (router) {
    router.get('/oauth/callback',auth);
};
