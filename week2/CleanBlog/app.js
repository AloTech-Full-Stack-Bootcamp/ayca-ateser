const express=require('express')
const ejs=require('ejs')
const path=require('path')
const app=express();
//template engine
app.set("view engine","ejs");

//MIDDLEWARE(req-response arasındaki hersey) 
app.use(express.static('public')) //public folder for static files

//Routing
app.get('/index.html',(req,res)=>{
    res.render("index")
});
app.get('/about.html',(req,res)=>{
    res.render("about")
});
app.get('/add_post.html',(req,res)=>{
    res.render("add_post")
});





const port=5000;
app.listen(port,()=>{
    console.log(`server started on port ${port}..`)
})