/**
 * Title: Default Configuration
 * Description: Application default configuration usually uses
 * Author: Jagadish Chakma
 * Date: 12-06-2021
 * Version: 1.0.0
 */

// external module
const cookieParser = require("cookie-parser");

function defaultConfiguration(express, app) {
  // url parser
  app.use(express.json());
  app.use(express.urlencoded({ extends: true }));

  // view engine
  app.set("view engine", "ejs");

  // static folder
  app.use(express.static(__dirname + '/../public/'));

  // cookie parser
  app.use(cookieParser(process.env.COOKIE_SECRET));
}

module.exports = defaultConfiguration;
