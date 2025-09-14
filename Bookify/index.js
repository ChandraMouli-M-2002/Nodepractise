const express=require("express")
const bodyParser=require('body-parser')
const {logReqResponseOnConsole, logReqResponseOnConsoleForRequestMethod}=require('./middlewares/logger');
const bookRouter = require('./routes/books')
const path=require('path');

const app = express();


//Middleware
app.use(bodyParser.json());
app.use(express.static(path.resolve('./public')))
// app.use(logReqResponseOnConsole);
// app.use(logReqResponseOnConsoleForRequestMethod("GET"));

app.use('/',bookRouter);


app.listen(8000,()=>console.log("Server started at PORT:8000"));