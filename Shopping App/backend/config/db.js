// Importing mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Importing colors library to style the console messages
require("colors");

// Defining an async function to connect to MongoDB
const connectDB = async () => {
  try {
    // Try to connect to the MongoDB database using the URI from environment variables
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true, // Option to handle MongoDB's new connection engine
      useNewUrlParser: true, // Option to use the new URL parser
    });

    // If connection is successful, log the host where MongoDB is connected
    console.log(`MongoDB Connection ${conn.connection.host}`.bgCyan); // Adds background color to the message for better visibility
  } catch (error) {
    // If there is an error while connecting, log the error message in red
    console.log(`Error: ${error.message}`.red);

    // Exit the process with failure (status 1) in case of a connection error
    process.exit(1);
  }
};

// Exporting the connectDB function to be used in other parts of the application
module.exports = connectDB;
