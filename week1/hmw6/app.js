const Koa = require('koa');

const app = new Koa();

app.use(async (ctx,next) => {
    if(ctx.path === '/') {
        ctx.body = '<h1>Hello,Welcome to index page!</h1>';
    } else if(ctx.path === '/aboutus') {
        ctx.body = '<h1>Hello,Welcome to about us page!</h1>';
    } else if(ctx.path === '/contact') {
        ctx.body = '<h1>Hello,Welcome to contact page!</h1>';
   
    }
});

const port = 3000;
app.listen(port);