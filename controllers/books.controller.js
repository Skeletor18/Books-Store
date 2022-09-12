const Books = require("../models/Book.model.js");

module.exports.booksControllers = {
  postBooks: async (req, res) => {
    const { name, author, genres } = req.body;
    try {
      const booksPost = await Books.create({
        name,
        author,
        genres,
      });
      res.json(booksPost);
    } catch (err) {
      res.json(err);
    }
  },
  deleteBooks: async (req, res) => {
    try {
      const booksDelete = await Books.findByIdAndRemove(req.params.id);
      res.json(booksDelete);
    } catch (err) {
      res.json(err);
    }
  },
  patchBooks: async (req, res) => {
    const { name, author, genres } = req.body;
    try {
      const booksPatch = await Books.findByIdAndUpdate(req.params.id, {
        name,
        author,
        genres,
      });
      res.json(booksPatch);
    } catch (err) {
      res.json(err);
    }
  },
  getBooksId: async (req, res) => {
    try {
      const booksId = await Books.findById(req.params.id).populate(
        "author genres",
        "name"
      );
      res.json(booksId);
    } catch (err) {
      res.json(err);
    }
  },
  getBooks: async (req, res) => {
    try {
      const booksGet = await Books.find().populate("author genres", "name");
      res.json(booksGet);
    } catch (err) {
      res.json(err);
    }
  },
  getGenresBook: async (req, res) => {
    try {
      const booksGenres = Books.find({ genres: req.params.id });
      res.json(booksGenres);
    } catch (err) {
      res.json(err);
    }
  },
};
