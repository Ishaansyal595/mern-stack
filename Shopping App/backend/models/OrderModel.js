const mongoose = require("mongoose"); // Importing mongoose for MongoDB schema management

// Define the structure (schema) of an Order in the database
const OrderSchema = mongoose.Schema(
  {
    // Reference to the User who placed the order
    User: {
      type: mongoose.Schema.Types.ObjectId, // Reference to User model (user's ID)
      required: true, // User is mandatory for an order
      ref: "User", // 'User' refers to the User model in the database
    },

    // Array of ordered items, each item contains specific details
    orderItems: [
      {
        name: {
          type: String, // Name of the product
          required: true, // Product name is mandatory
        },
        qty: {
          type: Number, // Quantity of the product
          required: true, // Quantity is mandatory
          min: 1, // Ensure quantity is at least 1
        },
        image: {
          type: String, // URL of the product image
          required: true, // Image is mandatory
        },
        price: {
          type: Number, // Price of the product
          required: true, // Price is mandatory
          min: 0, // Ensure price is not negative
        },
        Product: {
          type: mongoose.Schema.Types.ObjectId, // Reference to Product model (product's ID)
          required: true, // Product reference is mandatory
          ref: "Product", // 'Product' refers to the Product model in the database
        },
      },
    ],

    // Shipping address details
    shippingAddress: {
      address: {
        type: String, // Street address
        required: true, // Address is mandatory
      },
      city: {
        type: String, // City name
        required: true, // City is mandatory
      },
      postalCode: {
        type: Number, // Postal code or zip code
        required: true, // Postal code is mandatory
        min: 0, // Ensure postal code is not negative
      },
      country: {
        type: String, // Country name
        required: true, // Country is mandatory
      },
    },

    // Payment method chosen (e.g., credit card, PayPal)
    payment: {
      type: String, // Type of payment method
      required: true, // Payment method is mandatory
    },

    // Information about the payment result (useful for tracking payments from services like PayPal)
    paymentResult: {
      id: { type: String }, // ID from the payment provider
      status: { type: String }, // Payment status (e.g., completed, pending)
      update_time: { type: String }, // Time of the last update
      emailAddress: { type: String }, // Email address used for the payment
    },

    // Prices for tax, shipping, and total order cost
    taxPrice: {
      type: Number, // Tax price applied to the order
      required: true, // Tax is mandatory (can be 0.0)
      default: 0.0, // Default tax is 0 if not provided
      min: 0, // Ensure tax is not negative
    },

    shippingPrice: {
      type: Number, // Shipping cost for the order
      required: true, // Shipping price is mandatory
      default: 0.0, // Default shipping cost is 0 if not provided
      min: 0, // Ensure shipping price is not negative
    },

    totalPrice: {
      type: Number, // Total price for the order (includes items, tax, shipping)
      required: true, // Total price is mandatory
      default: 0.0, // Default total price is 0 if not provided
      min: 0, // Ensure total price is not negative
    },

    // Payment and delivery status of the order
    isPaid: {
      type: Boolean, // Whether the order is paid or not
      required: true, // Payment status is mandatory
      default: false, // Default is unpaid
    },

    paidAt: { type: Date }, // The date when the payment was made

    isDelivered: {
      type: Boolean, // Whether the order has been delivered or not
      required: true, // Delivery status is mandatory
      default: false, // Default is undelivered
    },

    deliveredAt: { type: Date }, // The date when the order was delivered
  },
  { timestamps: true } // Automatically add createdAt and updatedAt timestamps
);

// Create a model from the schema, so we can interact with the 'Order' collection in the database
const Order = mongoose.model("Order", OrderSchema);

// Export the model to use it in other parts of the application
module.exports = Order;
