const { Router } = require("express");
const { booksControllers } = require("../controllers/books.controller");
const router = Router();

router.post("/books", booksControllers.postBooks);
router.delete("/books/:id", booksControllers.deleteBooks);
router.patch("/books/:id", booksControllers.patchBooks);
router.get("/books/:id", booksControllers.getBooksId);
router.get("/books", booksControllers.getBooks);
router.get("/books/genres/:id", booksControllers.getGenresBook);

module.exports = router;
