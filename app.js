const express = require("express");
const cors = require("cors");

const app = express();
const port = 5050;

const httpServer = require("http").createServer(app);
app.use(cors());

app.get("/", function (req, res) {
  res.send("Welcome to USS!");
});

httpServer.listen(port, () => {
  console.log(`USS backend is running on port ${port}...`);
});
