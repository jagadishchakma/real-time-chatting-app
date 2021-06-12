/**
 * Title: Application main or root file
 * Description: app.js will be main file for this application
 * Author: Jagadish Chakma
 * Date: 12-06-2021
 * Version: 1.0.0
 */

// external module
const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

// internal module
const createServer = require("./configs/server");
const databaseConnection = require("./configs/database");
const defaultConfiguration = require("./configs/defaultConfig");
const defaultErrorHandler = require("./configs/errorHandler");
const allRouter = require("./configs/router");

// default configuration
defaultConfiguration(express, app);

// database connection
databaseConnection();

// all router
allRouter(app);

// default error handler
defaultErrorHandler(app);


// server turn on or run
createServer(app);
