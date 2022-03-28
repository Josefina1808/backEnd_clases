const { bookRouter } = require("./book_router");
const { authorRouter } = require("./author_router");
const router = require("express").Router();

// router
router.use("/api/books", bookRouter);
router.use("/api/authors", authorRouter);

module.exports = router;
