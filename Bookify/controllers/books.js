const fs=require('fs');
const path = require('path');
const Book=require('../models/books')


let Books=[
    {
        id:1,
        bookName:"JavaScript Guide",
        authoName:"Mouli",
        pages:100,
        price:400,
        isbn:123,

    },
    {
        id:2,
        bookName:"React Guide",
        authoName:"Chandru",
        pages:200,
        price:600,
        isbn:143,

    },
     {
        id:3,
        bookName:"C# Guide",
        authoName:"Chandru",
        pages:200,
        price:700,
        isbn:153,

    },
    {
        id:4,
        bookName:"Java Guide",
        authoName:"Chandru",
        pages:300,
        price:1000,
        isbn:163,

    },
];


// function handleGetAllBooks(req,res){
//     return res.json({Books});
// }

// function handleGetAllBooks(req,res){
//     const htmlFile = fs.readFileSync(path.resolve('books.html'), 'utf-8');
    
//     return res.end(htmlFile.replace('books',JSON.stringify(Books)));
// }


// function handleGetAllBooks(req,res){
//     return res.render('books',{
//         allBooks:'chandramouli',
//         author:'Mouli'
//     });
// }

async function handleGetAllBooks(req,res){
    const booksInDb = await Book.find({});
    console.log('booksINDb', booksInDb);
    return res.render('books',{
        Books:booksInDb, 
    });
}


async function  handleGetBookById(req,res){
    console.log(req.url)
    const id=req.params.bookId;
    const book= await Book.findById(id);
    if(!book){
        return res.status(404).json({error:"Book not found"});
    }
    return res.render('book',{book});
    // return res.json({Books});
}


 async function handleCreateNewBook(req,res){
   const bookfromClient = req.body;
//    Books.push(body);
//    console.log(body)
    await Book.create(bookfromClient)
   res.status(201).json({status:'success'})
}

async function handleDeleteBookById(req,res){
    const bookIdtoDelete=req.params.bookId;
    await Book.findByIdAndDelete(bookIdtoDelete);
    // Books=Books.filter((e)=>e.id !== Number(id));
    return  res.json({status:"deleted"});

}


module.exports={
    handleGetAllBooks,
    handleGetBookById,
    handleCreateNewBook,
    handleDeleteBookById
}