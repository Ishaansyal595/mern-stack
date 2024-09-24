// Importing mongoose, a library for MongoDB object modeling
const mongoose = require("mongoose");

// Creating a schema for reviews, which are feedback from users on products
const reviewsSchema = mongoose.Schema(
  {
    name: {
      // The name of the user who left the review
      type: String,
      required: true, // This field must be filled out
    },
    rating: {
      // The rating given to the product (usually between 1 and 5)
      type: Number,
      required: true, // This field must be filled out
    },
    comment: {
      // A comment made by the user about the product
      type: String,
      required: true, // This field must be filled out
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

// Creating the schema for products
const productSchema = mongoose.Schema({
  user: {
    // The user who added the product
    type: mongoose.Schema.Types.ObjectId, // Refers to the unique ID of the user in the User model
    required: true, // This field must be filled out
    ref: "User", // Reference to the User model
  },
  name: {
    // The name of the product
    type: String,
  },
  image: {
    // The image of the product (stored as a URL or path)
    type: String,
    required: true, // An image is required for each product
  },
  brand: {
    // The brand of the product (e.g., Nike, Apple)
    type: String,
    required: true, // The brand must be provided
  },
  category: {
    // The category the product belongs to (e.g., electronics, clothing)
    type: String,
    required: true, // Category must be provided
  },
  description: {
    // A description of the product
    type: String,
    required: true, // The product must have a description
  },
  reviews: [reviewsSchema], // An array of reviews using the reviewsSchema
  rating: {
    // The average rating of the product (calculated from all reviews)
    type: Number,
    required: true, // A rating is required
  },
  numReviews: {
    // The total number of reviews the product has received
    type: Number,
    required: true, // The number of reviews is required
  },
  price: {
    // The price of the product
    type: Number,
    required: true, // The price is required
  },
  countInStock: {
    // The quantity of this product currently in stock
    type: Number,
    required: true, // The stock count is required
  },
});

// Creating the Product model from the product schema
const Product = mongoose.model("Product", productSchema);

// Exporting the Product model so it can be used in other parts of the application
module.exports = Product;
