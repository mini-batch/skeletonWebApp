const config = require("./utils/config");
const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");
// import routers
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

let dbUrl = config.MONGODB_URI;
if (process.env.NODE_ENV === "test") {
    dbUrl = process.env.TEST_MONGO_URI;
}

console.log("connecting to", dbUrl);

mongoose.connect(dbUrl)
    .then(() => {
        logger.info("Connected to database");
    })
    .catch((error) => {
        logger.error("Error connecting to database:", error.message);
    });

app.use(cors());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("dist"));
}
app.use(express.json());
app.use(middleware.requestLogger);

// use routers

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
