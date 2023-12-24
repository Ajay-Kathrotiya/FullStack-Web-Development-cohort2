const mongoose = require("mongoose");
const { MONGO_URI } = process.env;

exports.connect = () => {
  // connecting to the database :

  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Successfully connceted to the database");
    })
    .catch((err) => {
      console.log("database connection failed. exisiting now...");
      console.error(err);
      process.exit(1);
    });
};
