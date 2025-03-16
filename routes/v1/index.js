const express = require("express");
const { login } = require("../../controllers/Login");
const { getProducts } = require("../../controllers/products");
const { getCategory } = require("../../controllers/category");
const router = express.Router();

router.post("/login", async (req, res) => {
  const userData = await login(req);
  const { w_id, user_login } = userData[0];

  if (userData) {
    res.status(200).send({
      message: "success",
      data: { w_id, user_login },
    });
  } else {
    res.status(401).send({
      message: "unauthorized",
      data: [],
    });
  }
});

router.get("/products/:id?", async (req, res) => {
  const productsData = await getProducts(req);

  if (productsData) {
    res.status(200).send({
      message: "success",
      data: productsData,
    });
  } else {
    res.status(401).send({
      message: "unauthorized",
      data: [],
    });
  }
});

router.get("/category/:id?", async (req, res) => {
  const categoryData = await getCategory(req);

  if (categoryData) {
    res.status(200).send({
      message: "success",
      data: categoryData,
    });
  } else {
    res.status(401).send({
      message: "unauthorized",
      data: [],
    });
  }
});

module.exports = router;
