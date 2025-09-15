const express=require("express")
const mongoose = require("mongoose");
const bodyParser=require('body-parser')
const {logReqResponseOnConsole, logReqResponseOnConsoleForRequestMethod}=require('./middlewares/logger');
const bookRouter = require('./routes/books')
const path=require('path');

const app = express();

mongoose.connect('mongodb://localhost:27017/bookify')
.then(()=>console.log('Mongodb connected'))
.catch(err => console.log('Error Connecting to mongo',err))

//Middleware
app.use(bodyParser.json());
app.use(express.static(path.resolve('./public')));
// app.use(logReqResponseOnConsole);
// app.use(logReqResponseOnConsoleForRequestMethod("GET"));

app.set('view engine', "ejs");
app.set("views", path.resolve("views"))

app.use('/',bookRouter);


app.listen(8000,()=>console.log("Server started at PORT:8000"));