const mongoose = require("mongoose");

const ecoTipSchema = mongoose.Schema({
  tip: { type: String },
});

const ecoTipModel = mongoose.model("ecoTips", ecoTipSchema);

module.exports = { ecoTipModel };
