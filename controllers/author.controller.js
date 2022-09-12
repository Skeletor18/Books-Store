const Author = require("../models/Author.model.js");

module.exports.authorControllers = {
  postAuthor: async (req, res) => {
    const { name, infoAuthor } = req.body;
    try {
      const authorPort = await Author.crete({
        name,
        infoAuthor,
      });
      res.json(authorPort);
    } catch (err) {
      res.json(err);
    }
  },

  deleteAuthor: async (req, res) => {
    try {
      const authorDelete = await Author.findByIdAndRemove(req.params.id);
      res.json(authorDelete);
    } catch (err) {
      res.json(err);
    }
  },
};
