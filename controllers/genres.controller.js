const Genre = require("../models/Genre.model.js");

module.exports.genresControllers = {
  postGenres: async (req, res) => {
    const { name, description } = req.body;
    try {
      const genresPost = Genre.crete({
        name,
        description,
      });
      res.json(genresPost);
    } catch (err) {
      res.json(err);
    }
  },
  deleteGenres: async (req, res) => {
    try {
      const genresDelete = Genre.findByIdAndRemove(req.params.id);
      res.json(genresDelete);
    } catch (err) {
      res.json(err);
    }
  },
  getGenres: async (req, res) => {
    try {
      const genreGet = Genre.find();
      res.json(genreGet);
    } catch (err) {
      res.json(err);
    }
  },
};
