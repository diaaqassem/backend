const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const routes = require("./routes/index.route");
const morgan = require("morgan");

// database connection
function dbConnection() {
  const url = process.env.DB_URL;
  mongoose
    .connect(url)
    .then(() => {
      console.log("db connected!!");
    })
    .catch((err) => {
      console.log(err);
      console.log("db not connected!!");
    });
}

//generate strong secret
// const crypto = require("crypto");
// (() => {
//   const secretKey = crypto.randomBytes(32).toString("hex");
//   console.log(`Secret Key: ${secretKey}`);
// })();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", routes);

app.all("*", (req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.listen(PORT, () => {
  dbConnection();
  console.log(`app listening on PORT ${PORT}!`);
});
