const express=require("express")
const bodyParser=require('body-parser')
const {logReqResponseOnConsole, logReqResponseOnConsoleForRequestMethod}=require('./middlewares/logger');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(logReqResponseOnConsole);
app.use(logReqResponseOnConsoleForRequestMethod("GET"));

// app.use(function(req,res,next){
//     console.log("Requesting coming from the client");
//     req.myCustomName = "Mouli";
//     next();
// })

// app.use(function(req,res,next){
//     console.log("Requesting coming from middleware2");
//     console.log("Hello from middleware 2",req.myCustomName); 
//     next();
//     // return res.json({message:"Hey From Middleware"});
// })

let Books=[
    {
        id:1,
        name:"Js Interview",
        authoName:"Mouli",
        pages:100,
        price:400,
        isbn:123,

    },
    {
        id:2,
        name:"React Interview",
        authoName:"Chandru",
        pages:200,
        price:600,
        isbn:143,

    },
];

// app.use('/books',function(req,res,next){
//     console.log('Routing Middleware');
//     next();

// })

app.get('/books', function(req,res){
    console.log(req.headers["myname "]);
    return res
    .setHeader('X-ServerName','Bookify Server')
    .setHeader('X-CustomHeader1','ABC')
    .json({Books});
})

//dyanamic path
app.get('/books/:bookId', function(req,res){
    console.log(req.url)
    const id=req.params.bookId;
    const book= Books.find((e)=> e.id === Number(id));
    return res.json({book});
    // return res.json({Books});
})

app.post('/book', function(req,res){
   const body= req.body;
   Books.push(body);
//    console.log(body)
   res.json({status:'success'})
})

app.delete('/books/:bookId',function(req,res){
    const id=req.params.bookId;
    Books=Books.filter((e)=>e.id !== Number(id));
    return  res.json({status:"deleted"});

})

app.listen(8000,()=>console.log("Server started at PORT:8000"));