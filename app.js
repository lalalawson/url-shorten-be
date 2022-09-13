const express = require("express");
const cors = require("cors");

const app = express();
const port = 5050;

const httpServer = require("http").createServer(app);
app.use(cors());
const db = require("./db/db.config");

// Test endpoint to ensure server is up.
app.get("/", function (req, res) {
  res.send("Welcome to USS!");
});

// Model for the url object
const Url = require("./models/urlModel");

httpServer.listen(port, () => {
  console.log(`USS backend is running on port ${port}...`);
  console.log("Attemping to connect to MongoDB cluster..");
});
