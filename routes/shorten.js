const express = require("express");
const validUrl = require("valid-url");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
const Url = require("../models/urlModel");

// create an endpoint to convert the long URL
// within the body into a short id.
router.post("/", async (req, res) => {
  const { longUrl } = req.body;
  const shortUrl = uuidv4().slice(0, 6);

  // check if url provided by req is valid
  if (validUrl.isUri(longUrl)) {
    try {
      // see if the longUrl already exists
      let longUrlExists = await Url.findOne({ longUrl });

      if (longUrlExists) {
        res.json(longUrlExists);
      } else {
        newUrlPair = new Url({
          longUrl,
          shortUrl,
          date: new Date(),
        });
        await newUrlPair.save();
        res.json(newUrlPair);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("An error has occured.");
    }
  } else {
    res.status(401).json("Invalid url provided.");
  }
});

module.exports = router;
