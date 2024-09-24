// Importing mongoose to create a schema and model
const mongoose = require("mongoose");

// Creating a schema (structure) for the user data
const userSchema = mongoose.Schema(
  {
    // 'name' field: it's a string and is required (must be provided)
    name: {
      type: String,   // Defines that the value must be a string
      required: true, // This means the name is mandatory
    },

    // 'email' field: it's a string and is required
    email: {
      type: String,   // Must be a string (e.g., "user@example.com")
      required: true, // The email is mandatory
      unique: true,   // Ensures no two users can have the same email
    },

    // 'password' field: it's a string and is required
    password: {
      type: String,   // Password should be stored as a string
      required: true, // The password is also required
      minlength: 6,   // Ensures the password is at least 6 characters long
    },

    // 'isAdmin' field: it's a boolean (true/false) to define if the user is an admin or not
    isAdmin: {
      type: Boolean,  // Boolean value (either true or false)
      required: true, // This field is mandatory
      default: false, // By default, users are not admins (set to false)
    },
  },
  { timestamps: true } // This option automatically adds createdAt and updatedAt timestamps to each user
);

// Creating the 'User' model from the schema, allowing us to work with user data in the database
const User = mongoose.model("User", userSchema);

// Exporting the 'User' model so it can be used in other files
module.exports = User;
