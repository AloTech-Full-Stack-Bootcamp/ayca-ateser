
const http=require('http');
const server= http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if(req.url==='/'){
       res.write('<h2>Hello,Welcome to index page.</h2>');
       res.end();
    }

    else if(req.url==='/aboutus'){
        res.write('<h2>Hello,Welcome to about us page.</h2>');
        res.end();
    }

    else if (req.url==='/contact'){
        res.write('<h2> Hello,Welcome to contact page.</h2>');
        res.end();
    }
});

server.listen(5000);