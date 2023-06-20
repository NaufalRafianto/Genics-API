const Product = require("../models/Product");

// Get all products
const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.json({ product });
  } catch (error) {
    console.log(error);
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category; // Extract the "category" parameter from req.params
    const products = await Product.find({ category }); // Find products with matching category

    if (products.length > 0) {
      res.json({ products });
    } else {
      res.json({ message: "No products found in the specified category." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Save a product
const saveProduct = async (req, res) => {
  try {
    const { name, category, price, stock } = req.body;
    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
      return res
        .status(400)
        .json({ message: "A product with the same name already exists" });
    }

    const newProduct = await Product.create({
      name,
      category,
      price,
      stock,
    });

    res.json({
      message: `${name} has been added to the database`,
      product: newProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Update a product
const updateProduct = async (req, res) => {
  try {
    const { name, category, price, stock } = await req.body;
    await Product.findByIdAndUpdate(req.params.id, {
      name: name,
      category: category,
      price: price,
      stock: stock,
    });
    res.json({ message: `${name} has updated the data` });
  } catch (error) {
    console.log(error);
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = await req.params;
    await User.deleteOne({ id: id });
    res.json({ message: `Product has deleted from database` });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  getProductsByCategory,
  saveProduct,
  updateProduct,
  deleteProduct,
};
