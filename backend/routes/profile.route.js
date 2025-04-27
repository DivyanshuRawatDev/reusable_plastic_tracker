const express = require("express");
const {
  getDailyTips,
  addTips,
  getAITips,
  getTopFive
} = require("../controllers/profile.controller");
const { authentication } = require("../middleware/authentication");

const route = express.Router();

route.get("/tips", getDailyTips);
route.post("/tips", addTips);
route.get("/ask-ai",authentication, getAITips);
route.get("/top-5",authentication,getTopFive)
module.exports = route;
