const fs=require('fs');
const path = require('path');


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


// function handleGetAllBooks(req,res){
//     return res.json({Books});
// }

function handleGetAllBooks(req,res){
    const htmlFile = fs.readFileSync(path.resolve('books.html'), 'utf-8');
    
    return res.end(htmlFile.replace('books',JSON.stringify(Books)));
}


function  handleGetBookById(req,res){
    console.log(req.url)
    const id=req.params.bookId;
    const book= Books.find((e)=> e.id === Number(id));
    return res.json({book});
    // return res.json({Books});
}


function handleCreateNewBook(req,res){
   const body= req.body;
   Books.push(body);
//    console.log(body)
   res.json({status:'success'})
}

function handleDeleteBookById(req,res){
    const id=req.params.bookId;
    Books=Books.filter((e)=>e.id !== Number(id));
    return  res.json({status:"deleted"});

}


module.exports={
    handleGetAllBooks,
    handleGetBookById,
    handleCreateNewBook,
    handleDeleteBookById
}