// Importing bcryptjs, a library used to hash passwords for security
const bcrypt = require("bcryptjs");

// Defining an array of user objects
// This array stores user details including name, email, hashed password, and admin role.
const UserData = [
  {
    // Admin user
    name: "admin", // Name of the admin user
    email: "admin@gmail.com", // Email of the admin user
    password: bcrypt.hashSync("admin123", 10), // Hashing the password for security
    isAdmin: true, // Boolean flag indicating this user is an admin
  },

  {
    // Regular user (Ishaan)
    name: "ishaan", // Name of the regular user
    email: "ishaan@gmail.com", // Email of the regular user
    password: bcrypt.hashSync("ishaan123", 10), // Unique password hashed for security
    isAdmin: false, // This user is not an admin
  },

  {
    // Another regular user (Ishu)
    name: "ishu", // Name of another regular user
    email: "ishu@gmail.com", // Email of the other regular user
    password: bcrypt.hashSync("ishu123", 10), // Unique password hashed for security
    isAdmin: false, // This user is also not an admin
  },
];

// Exporting the UserData array for use in other parts of the application (e.g., database seeding)
module.exports = UserData;
