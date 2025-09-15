const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    bookName:{
        type:String,
        required:true,
    },
    isbn:{
        type:Number,
        required:true,
    },
    authoName:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
    },
    pages:{
        type:Number,
    },
})

const Book = mongoose.model('book',bookSchema);

module.exports = Book;