// Import required modules
const mongoose = require("mongoose"); // Importing mongoose for ObjectId validation
const express = require("express"); // Importing the Express framework to create a router
const Products = require("../models/ProductModel"); // Importing the Product model to interact with the products in the database
const asyncHandler = require("express-async-handler"); // Middleware to handle async operations and catch errors
const router = express.Router(); // Creating a new Express router instance

// GET ROUTE FOR ALL PRODUCTS
// This route fetches all products from the database when the "/products" URL is visited.
router.get(
  "/products",
  asyncHandler(async (req, res) => {
    try {
      const products = await Products.find({}); // Fetch all products from the database
      console.log(`all products ${products}`);
      console.log("hello".red.inverse);
      res.json(products); // Send the list of products back to the client as a JSON response
    } catch (error) {
      res.status(500).json({ message: "Server error" }); // Handle any potential server errors
    }
  })
);

// GET ROUTE FOR ONE PRODUCT
// This route fetches a single product by its ID when the "/products/:id" URL is visited.
router.get(
  "/products/:id",
  asyncHandler(async (req, res) => {
    // Check if the provided ID is a valid ObjectId
    console.log("Requested Product ID:", req.params.id);
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: "Invalid product ID format" });
    }

    try {
      const product = await Products.findById(req.params.id); // Find the product by the ID passed in the URL
      // console.log(
      //   `Product: ${product} Requested Product ID: ${
      //     req.params.id
      //   }, Type: ${typeof req.params.id}`
      // );

      if (!product) {
        // If no product is found with the given ID
        return res.status(404).json({ message: "Product not found" }); // Return a 404 error and a message
      }
      res.json(product); // If the product is found, send it back as a JSON response
    } catch (error) {
      res.status(500).json({ message: "Server error" }); // Handle any potential server errors
    }
  })
);

// Export the router
module.exports = router; // This allows the router and its routes to be used in other parts of the application
