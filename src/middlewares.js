const jwt = require("jsonwebtoken");

const notFound = (req, res, next) => {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
};

const authentication = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    req.isAuth = false;
    return next();
  }
  const token = authHeader.split("Bearer ")[1]; //Authorization : Bearer (tokenvalue)
  if (!token || token === "") {
    req.isAuth = false;
    return next();
  }
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "supersecretkey");
  } catch (err) {
    req.isAuth = false;
    return next();
  }
  if (!decodedToken) {
    req.isAuth = false;
    return next();
  }
  req.isAuth = true;
  req.id_user = decodedToken.id_user;
  next();
};

module.exports = { notFound, errorHandler, authentication };
