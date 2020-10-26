const express = require("express");
const database = require("../database");
const query = require("knex")(database);
const handler = require("../util/handler");

const router = express.Router();

const validation = require("../util/validation");

router.get("/", (req, res) => {
  return res.json({ message: "Welcome to blog API" });
});

router.post("/post", async (req, res) => {
  const isAuth = req.isAuth;
  if (!isAuth) return handler.unAuthMessage(res);

  const data = {
    id_user: req.id_user,
    judul: req.body.judul,
    content: req.body.content,
    image: "blank.png",
    created_at: new Date().getTime(),
  };

  const { valid, errors } = validation.validBlog(data);
  if (!valid) return handler.badRequestMessage({ res, error: errors });

  try {
    await query("blog").insert(data);
    return handler.successMessage({ res, msg: "Blog Berhasil ditambahkan" });
  } catch (error) {
    return handler.internalServerErrorMessage({ res, error });
  }
});

router.get("/getAll", async (req, res) => {
  const isAuth = req.isAuth;
  if (!isAuth) return handler.unAuthMessage(res);
  try {
    const blog = await query("blog").innerJoin(
      "user",
      "user.id_user",
      "blog.id_user"
    );

    return handler.successMessage({
      res,
      msg: "success fetch API getAll",
      data: blog,
    });
  } catch (error) {
    return handler.internalServerErrorMessage({ res, error });
  }
});

router.get("/get_detail/:id_blog", async (req, res) => {
  const isAuth = req.isAuth;
  if (!isAuth) return handler.unAuthMessage(res);

  const id_blog = req.params.id_blog;
  console.log(id_blog);

  try {
    const blog = await query("blog")
      .innerJoin("user", "user.id_user", "blog.id_user")
      .where({ id_blog });

    return handler.successMessage({
      res,
      msg: "success fetch API getAll",
      data: blog[0],
    });
  } catch (error) {
    return handler.internalServerErrorMessage({ res, error });
  }
});

module.exports = router;
