const helpers = require("../helpers/utils");

let middleware = function (req, res, next) {
  console.log("API hitted " + req.path + " AT " + new Date());
  next();
};

let apiLogger = function (req, res, next) {
  console.log("API hitted " + req.path + " AT " + new Date());
  next();
};

let authenicate = function (req, res, next) {
  try {
    console.log(req.headers.authorization);
    let result = helpers.decodeToken(req.headers.authorization);
    console.log(result);
    next();
  } catch (error) {
    res.status(401).json({
      message: "unauthorize user",
    });
  }
};

module.exports = {
  middleware: middleware,
  apiLogger: apiLogger,
  authenicate,
};
