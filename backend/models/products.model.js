const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: String },
  icon: { type: String },
  points:{type:Number},
  description: { type: String },

});

const ProductModel = mongoose.model("products", productSchema);

module.exports = { ProductModel };
