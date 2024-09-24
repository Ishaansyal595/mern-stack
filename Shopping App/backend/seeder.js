// Importing necessary libraries and modules
require("colors"); // Allows coloring console messages
const mongoose = require("mongoose"); // Mongoose for MongoDB object modeling
const dotenv = require("dotenv"); // For loading environment variables

// Importing data and models
const userData = require("./data/Userdata"); // User data to be imported
const products = require("./data/products"); // Product data to be imported

const User = require("./models/UserModel"); // User model
const Order = require("./models/OrderModel"); // Order model
const Product = require("./models/ProductModel"); // Product model

// Database connection configuration
const connectDB = require("./config/db"); // Connect to the database

// Load environment variables from .env file
dotenv.config();
connectDB(); // Establish database connection

// Function to import data
const importData = async () => {
  try {
    // Delete existing data in the collections
    await Order.deleteMany(); // Clear orders
    await User.deleteMany(); // Clear users
    await Product.deleteMany(); // Clear products

    // Insert new user data
    const createdUsers = await User.insertMany(userData); // Import users
    const adminUserId = createdUsers[0]._id; // Get the ID of the first user (assumed admin)

    // Prepare product data, assigning the admin user as the creator of the products
    const sampleData = products.map((product) => ({
      ...product,
      user: adminUserId, // Associate each product with the admin user
    }));

    // Insert new product data
    await Product.insertMany(sampleData); // Import products

    // Log success message in green color
    console.log("Data Imported!!".green.inverse);
    process.exit(); // Exit the process successfully
  } catch (error) {
    // Log any errors that occur during the import process
    console.error(`Error in the Import: ${error.message}`.red.inverse); // More descriptive error message
    process.exit(1); // Exit with failure
  }
};

// Function to delete all data
const dataDestroy = async () => {
  try {
    // Delete existing data in the collections
    await Order.deleteMany(); // Clear orders
    await User.deleteMany(); // Clear users
    await Product.deleteMany(); // Clear products

    // Log success message in green color
    console.log("Data Destroyed!!".green.inverse);
    process.exit(); // Exit the process successfully
  } catch (error) {
    // Log any errors that occur during the delete process
    console.error(`Error in Data Destruction: ${error.message}`.red.inverse); // More descriptive error message
    process.exit(1); // Exit with failure
  }
};

// Check command line arguments to decide whether to import or delete data
if (process.argv[2] === "-d") {
  dataDestroy(); // Call the data destroy function if -d is passed
} else {
  importData(); // Call the import data function otherwise
}
