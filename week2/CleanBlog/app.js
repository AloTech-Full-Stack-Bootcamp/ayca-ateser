const express=require('express'); 
require('dotenv').config();
const ejs=require('ejs');
const mongoose=require('mongoose');
const methodOverride=require('method-override');
const pageController=require('./controllers/pageController')
const postController=require('./controllers/postController')
const app=express();

//Connect Database 
mongoose.connect(process.env.MONGO,{
    useNewUrlParser:true,
    useUnifiedTopology:true 
}).then(()=>{console.log(`mongodb connected!`)})
.catch((err)=>{console.error(err); console.log('HATA VAR')});

//Template Engine
app.set("view engine","ejs");
//Middlewares
app.use(express.static('public'))//static contents
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(
   methodOverride('_method',{
      methods:['POST','GET']
    })
);
//Routing
app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);
app.get('/posts/edit/:id', pageController.getEditPage);
app.get("/about", pageController.getAboutPage);
app.get("/add", pageController.getAddPage);

//port settingss
const port=5000;
app.listen(port,()=>{
    console.log(`server started on port ${port}..`)
});

