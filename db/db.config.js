const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.DB_URI;

const connection = mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established connection to mongodb!"))
  .catch((err) => console.log(err));

module.exports = connection;
