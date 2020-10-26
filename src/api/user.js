const express = require("express");
const database = require("../database");
const query = require("knex")(database);
const jwt = require("jsonwebtoken");

const router = express.Router();

const validation = require("../util/validation");
const handler = require("../util/handler");

router.get("/", (req, res) => {
  return res.json({ message: "Welcome to user API" });
});

router.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const { valid, errors } = validation.validLogin(username, password);
  if (!valid) return handler.badRequestMessage({ res, error: errors });

  try {
    const findUser = await query("user").where({ username });
    if (findUser.length === 0)
      return handler.notFoundMessage({
        res,
        error: { user: "User is not found" },
      });

    const matchPassword = await query("user").where({ username, password });
    if (matchPassword.length === 0)
      return handler.badRequestMessage({
        res,
        error: { password: "Password is incorrect - check again" },
      });

    const admin = matchPassword[0];
    const token = jwt.sign({ id_user: admin.id_user }, "supersecretkey", {
      expiresIn: "1h",
    });

    return handler.successMessage({
      res,
      msg: "login success - token is available for 1h",
      token,
    });
  } catch (error) {
    return handler.internalServerErrorMessage({ res, error });
  }
});

router.get("/get_user", async (req, res) => {
  const id_user = req.id_user;
  try {
    const user = await query("user").where({ id_user });
    return handler.successMessage({ res, data: user[0] });
  } catch (error) {
    return handler.internalServerErrorMessage({ res, error });
  }
});

module.exports = router;
