const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const DBConnect = require("./utils/dbConnect");

const app = require("./app");

// database connection
const run = async () => {
  mongoose.connect(process.env.DB_CONNECT).then(() => {
    console.log('Database connected'.blue.bold)
  })
}

run()

// server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});

