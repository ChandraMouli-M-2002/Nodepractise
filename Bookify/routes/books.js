const express = require('express');
const router=express.Router();
const bookController = require('../controllers/books')

router.get("/books",bookController.handleGetAllBooks);
router.get("/books/:bookId",bookController.handleGetBookById);
router.post("/book",bookController.handleCreateNewBook);
router.delete('/books/:bookId',bookController.handleDeleteBookById);


module.exports=router;