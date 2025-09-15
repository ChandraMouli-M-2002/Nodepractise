const express=require('express');
const bodyParser=require('body-parser')
const path=require('path');
const mongoose=require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/GuviBlogs')
.then(()=> console.log('DB Connected Successfully'))
.catch((err)=> console.log('MongoDB connection Error',err));

const userRouter= require('./routers/userRoutes');
const blogRouter= require('./routers/blogRoutes');
const staticRouter= require('./routers/staticRouter');

//Configrations
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.resolve('./public')));

//Register Routes
app.use('/',staticRouter);  
app.use('/user',userRouter);
app.use('/blog',blogRouter);

//Listner
app.listen(8000,()=> console.log("Server Started at port 8000"));  