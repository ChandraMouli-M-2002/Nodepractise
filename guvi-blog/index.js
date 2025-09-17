const express=require('express');
const bodyParser=require('body-parser')
const path=require('path');
const mongoose=require('mongoose');
var cookieParser = require('cookie-parser')

const userRouter= require('./routers/userRoutes');
const blogRouter= require('./routers/blogRoutes');
const staticRouter= require('./routers/staticRouter');
const commentRouter= require('./routers/commentRouter');

const {CheckForToken}=require('./middlewares/auth');

const app = express();

//db connect
mongoose.connect('mongodb://localhost/GuviBlogs')
.then(()=> console.log('DB Connected Successfully'))
.catch((err)=> console.log('MongoDB connection Error',err));


//Configrations
app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.resolve('./public')));
app.use(cookieParser());
app.use(CheckForToken);

//Register Routes
app.use('/',staticRouter);  
app.use('/user',userRouter);
app.use('/blog',blogRouter);
app.use('/comment',commentRouter);

//Listner
app.listen(8000,()=> console.log("Server Started at port 8000"));  