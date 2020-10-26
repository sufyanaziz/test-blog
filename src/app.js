const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const api = require("./api");
const middlewares = require("./middlewares");
const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());
app.use(middlewares.authentication);

app.get("/", (req, res) => {
  return res.json({ message: "Hallo From API 😁" });
});

app.use("/blog/api/", api);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
