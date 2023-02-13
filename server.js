const express = require("express");
const app = express();
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const PORT = 3000

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Setup Routes For Which The Server Is Listening
app.use("/api", mainRoutes);

//Server Running
app.listen(process.env.PORT || PORT, () => {
  console.log("Server is running, you better catch it!");
});