const app = require("./app");
const port = 5050;

const httpServer = require("http").createServer(app);
httpServer.listen(process.env.PORT || port, () => {
  console.log(`USS backend is running on port ${process.env.PORT || port}...`);
  console.log("Attemping to connect to MongoDB cluster..");
});
