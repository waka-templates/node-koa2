'use strict';

var HomeIndex = async function (ctx) {

    {{#mysql}}
    //eg: use context.service
    //let data = await ctx.service.demo.getUserById(57);
    {{/mysql}}

    {{#tair}}
    //eg: use context.tair
    // await ctx.tair.setCache('demo-test-set','value-for-test');
    // let cache = await ctx.tair.getCache('demo-test-set');
    {{/tair}}

    ctx.body = await ctx.render('./home/index',{
        project: "{{ name }}",
        author: "{{ author }}"
    });
};
{{#pug}}
var JadeDemo = async function(ctx) {
    ctx.body = await ctx.render('./home/author.pug',{
        user: {
            name: "{{ author }}",
            appearance: 'handsome'
        }
    });
};
{{/pug}}

module.exports.register = function (router) {
    router.get('/',HomeIndex);
    router.get('/home/swig',HomeIndex);
    {{#pug}}
    router.get('/home/pug_jade',JadeDemo);
    {{/pug}}
};