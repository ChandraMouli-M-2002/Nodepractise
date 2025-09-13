const express=require("express")
const bodyParser=require('body-parser')

const app = express();

//Middleware
app.use(bodyParser.json());

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

app.get('/books', function(req,res){
    return res.json({Books});
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