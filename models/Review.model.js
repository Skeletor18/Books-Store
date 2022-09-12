const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
  text: String,
  author: String,
  book: {
    ref: "Book",
    type: mongoose.Schema.Types.ObjectId,
  },
});
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
