const express = require("express");

const router = express.Router();
const Url = require("../models/urlModel");

router.get("/:shortId", async (req, res) => {
  try {
    // find the long url that matches the id inputted
    const url = await Url.findOne({
      shortUrl: req.params.shortId,
    });
    if (url) {
      return res.status(200).json(url.longUrl);
    } else {
      return res.status(404).json("No such URL.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("An unexpected error has occured.");
  }
});

module.exports = router;
