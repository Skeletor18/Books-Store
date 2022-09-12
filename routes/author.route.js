const { Router } = require("express");
const { authorControllers } = require("../controllers/author.controller");
const router = Router();

router.post("/author", authorControllers.postAuthor);
router.delete("/author/:id", authorControllers.deleteAuthor);
module.exports = router;
