// Creating an array called 'products' that contains multiple product objects
const products = [
  {
    // Each product object has multiple properties:
    name: "boAt Airdopes 121v2 TWS Earbuds", // Name of the product
    image: "/images/boatHeadfone.jpg", // Path to the image for the product
    description:
      "boAt Airdopes 121v2 TWS Earbuds with Bluetooth V5.0, Immersive Audio, Up to 14H Total Playback, Instant Voice Assistant, Easy Access Controls with Mic and Dual Tone Ergonomic Design (Active Black)", // Product description
    brand: "Boat", // Brand of the product
    category: "Electronics", // Product category (e.g., Electronics)
    price: 20.99, // Price of the product
    countInStock: 10, // Number of items available in stock
    rating: 4.5, // Average rating out of 5
    numReviews: 12, // Number of reviews the product has received
  },
  {
    // Another product object with similar properties
    name: "Micromax IN 1b (Purple, 32 GB)", 
    image: "/images/micromaxInB.jpg", 
    description:
      "Say hello to the Micromax IN 1b smartphone whose powerful MediaTek Helio G35 gaming processor and a 5000 mAh battery will pave the way for effortless multitasking and usage.", 
    brand: "Micromax", 
    category: "Electronics", 
    price: 599.99, 
    countInStock: 7, 
    rating: 4.0, 
    numReviews: 8, 
  },
  {
    name: "Canon EOS 80D DSLR Camera", // Fixed "Cannon" to "Canon"
    image: "/images/camera.jpg", 
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design", 
    brand: "Canon", // Fixed "Cannon" to "Canon"
    category: "Electronics", 
    price: 929.99, 
    countInStock: 5, 
    rating: 3, 
    numReviews: 12, 
  },
  {
    name: "Sony Playstation 4 Pro White Version", 
    image: "/images/playstation.jpg", 
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music", 
    brand: "Sony", 
    category: "Electronics", 
    price: 399.99, 
    countInStock: 11, 
    rating: 5, 
    numReviews: 12, 
  },
  {
    name: "Logitech G-Series Gaming Mouse", 
    image: "/images/mouse.jpg", 
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience", 
    brand: "Logitech", 
    category: "Electronics", 
    price: 49.99, 
    countInStock: 7, 
    rating: 3.5, 
    numReviews: 10, 
  },
  {
    name: "Amazon Echo Dot 3rd Generation", 
    image: "/images/alexa.jpg", 
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small spaces", // Minor grammar fix
    brand: "Amazon", 
    category: "Electronics", 
    price: 29.99, 
    countInStock: 0, // This product is out of stock
    rating: 4, 
    numReviews: 12, 
  },
];

// Exporting the 'products' array so it can be used in other files
module.exports = products;
