const express = require("express");
const { login } = require("../../controllers/Login");
const { getProducts, setProducts } = require("../../controllers/products");
const { getCategory } = require("../../controllers/category");
const { getRaport } = require("../../controllers/dashboard");
const router = express.Router();

const sendResponse = (
  res,
  statusCode,
  data = null,
  message = "",
  errors = null,
  meta = null
) => {
  res.status(statusCode).json({
    status: statusCode >= 200 && statusCode < 300 ? "success" : "error",
    code: statusCode,
    message: message,
    data: data,
    errors: errors,
    meta: meta || { timestamp: new Date().toISOString() },
  });
};

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
router.post("/products/:id?", async (req, res) => {
  const productsData = await setProducts(req);

  if (productsData.affectedRows === 1) {
    sendResponse(res, 200, {}, "Success");
  } else {
    sendResponse(res, 400, {}, "Failed to change product data");
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

router.get("/dashboard/product/raport", async (req, res) => {
  const raportData = await getRaport(req);

  sendResponse(res, 200, raportData, "Success");
});

module.exports = router;
