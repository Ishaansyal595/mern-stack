import React from "react"; // Importing React library
import { Card } from "react-bootstrap"; // Importing Card component from React Bootstrap
import Rating from "../components/Rating"; // Importing custom Rating component
import { Link } from "react-router-dom"; // Importing Link for navigation

// Define the ProductScreen component, which receives a 'product' prop
const ProductScreen = ({ product }) => {
  console.log(`This is the product: ${product}`); // Log the product object to the console for debugging

  return (
    <>
      {/* Card component to display product details */}
      <Card className="my-3 p-3 rounded">
        {/* Link to the individual product page using product ID */}
        <Link to={`/products/${product._id}`}>
          <Card.Img src={product.image} alt={product.name} />
          {/* Display product image */}
        </Link>

        <Card.Body style={{ textDecoration: "none" }}>
          {/* Link to the individual product page for the title and other details */}
          <Link
            to={`/product/${product._id}`}
            style={{ textDecoration: "none" }}
          >
            <Card.Title as="div">
              <strong>{product.name}</strong> {/* Display product name */}
            </Card.Title>

            <Card.Text as="div">
              <div className="my-3">
                {/* Display product rating and number of reviews */}
                <Rating
                  value={product.rating} // Pass product rating to Rating component
                  text={` ${product.numReviews} Reviews`} // Display number of reviews
                />
              </div>
            </Card.Text>

            <Card.Text as="div">
              <div className="my-3">${product.price}</div>{" "}
              {/* Display product price */}
            </Card.Text>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

// Export the ProductScreen component as the default export
export default ProductScreen;
