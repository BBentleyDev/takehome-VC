const express = require("express");
const logger = require("morgan");
const connectDB = require("./database");
const mainRoutes = require("../routes/main");

function createApp() {
  const app = express();

  // Use .env file in config folder
  require("dotenv").config({ path: "./.env" });

  // Connect To Database
  connectDB();

  // Static Folder
  app.use(express.static("public"));

  // Body Parsing
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Logging
  app.use(logger("dev"));

  // Setup Routes For Which The Server Is Listening
  app.use("/api", mainRoutes);

  return app;
}

module.exports = createApp;