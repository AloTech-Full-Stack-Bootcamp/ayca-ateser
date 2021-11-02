const express=require('express');
const ejs=require('ejs');
const path=require('path');
const app=express();
//template engine
app.set("view engine","ejs");

//MIDDLEWARE(req-response arasındaki hersey) 
app.use(express.static('public'))//static contents

//Routing
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/add',(req,res)=>{
    res.render('add_post');
});

const port=5000;
app.listen(port,()=>{
    console.log(`server started on port ${port}..`)
});
/*var connect = require("connect");

var app = connect().use(connect.static(__dirname + '/views'));

app.listen(8180);
*/