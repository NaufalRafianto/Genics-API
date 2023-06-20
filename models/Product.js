const { Schema, model } = require("mongoose");

const Product = Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

module.exports = model("Products", Product);
