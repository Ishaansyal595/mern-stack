// Importing necessary modules
const express = require("express"); // Express framework for building web applications
require("colors"); // For coloring console logs (optional)
const dotenv = require("dotenv"); // To manage environment variables
const connectDB = require("./config/db"); // Function to connect to MongoDB
const productRoutes = require("./routes/ProductsRoutes"); // Importing product routes

// Load environment variables from .env file
dotenv.config();

// Connecting to MongoDB database
connectDB();

// Creating an instance of Express
const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); // Allows Express to handle JSON requests

// Defining a route for the root URL
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node Server</h1>"); // Sending a welcome message as HTML
});

// Using product routes under the /api prefix
app.use("/", productRoutes);

// Defining the port for the server
const PORT = process.env.PORT || 8080; // Use the PORT from the environment or default to 8080

// Starting the server and listening on the specified port
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on PORT ${PORT}`.inverse // Logs the server status in the console
  );
});
