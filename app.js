const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Test endpoint to ensure server is up.
app.get("/", function (req, res) {
  res.send("Welcome to USS!");
});

// parse request in JSON format
app.use(express.json());
app.use("/shorten", require("./routes/shorten"));
app.use("/redirect", require("./routes/redirect"));

module.exports = app;
