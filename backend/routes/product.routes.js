const express = require("express");
const { addNewProduct,getProducts, updateProductsDetails } = require("../controllers/products.controller");
const { authentication } = require("../middleware/authentication");

const route = express.Router();

route.post("/add",authentication, addNewProduct);
route.post("/update/products-data",authentication, updateProductsDetails);
route.get("/get",getProducts)

module.exports = route;
