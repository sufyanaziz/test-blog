const express = require("express");

const router = express.Router();

const user = require("./user");
const blog = require("./blog");

router.get("/", (req, res) => {
  return res.json({ message: "Welcome to main API" });
});
router.use("/user", user);
router.use("/blog", blog);

module.exports = router;
