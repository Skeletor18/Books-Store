const Review = require("../models/Review.model.js");

module.exports.reviewControllers = {
  postReview: async (req, res) => {
    const { text, author, book } = req.body;
    try {
      const reviewPost = await Review.crete({
        text,
        author,
        book,
      });
    } catch (err) {
      res.json(err);
    }
  },
  deleteReview: async (req, res) => {
    try {
      const revievDelete = await Review.findByIdAndRemove(req.params.id);
      res.json(revievDelete);
    } catch (err) {
      res.json(err);
    }
  },
  getReview: async (req, res) => {
    try {
      const reviewGet = await Review.find(req.params.id);
      res.json(reviewGet);
    } catch (err) {
      res.json(err);
    }
  },
};
