const express = require("express");
const router = express.Router();
const Submissions = require("../../models/Submissions");
router.get("/", async (req, res) => {
  try {
    const books = await Submissions.find({})
      .limit(9)
      .select({ frontPage: 1, title: 1, lid: 1 });
    const bookList = books.filter((book) => book.frontPage !== undefined);
    res.json(bookList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error");
  }
});

router.get("/more", async (req, res) => {
  const perPage = 9;
  try {
    const books = await Submissions.find({})
      .skip(req.query.page * perPage)
      .limit(perPage)
      .select({ frontPage: 1, title: 1, lid: 1 });
    const bookList = books.filter((book) => book.frontPage !== undefined);
    res.json(bookList);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error");
  }
});

router.get("/book", async (req, res) => {
  try {
    const content = await Submissions.find({ lid: req.query.lid }).select({
      digitizationFiles: 1,
    });
    const bookContent = content[0].digitizationFiles;
    res.json(bookContent);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error");
  }
});

router.get("/search", async (req, res) => {
  try {
    if (req.query.item === "auth") {
      const contents = await Submissions.find({
        artistName: req.query.word,
      }).select({ frontPage: 1, title: 1, lid: 1, artistName: 1 });
      res.json(contents);
    }
    else if(req.query.item === "title"){
      const contents = await Submissions.find({
        title: req.query.word,
      }).select({ frontPage: 1, title: 1, lid: 1, artistName: 1 });
      res.json(contents);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error");
  }
});

module.exports = router;
