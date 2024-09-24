import React, { useEffect } from "react"; // Import React and useEffect for handling side effects
import { useParams, Link } from "react-router-dom"; // Import hooks for accessing URL parameters and navigation
import { Row, Col, Image, ListGroupItem, ListGroup } from "react-bootstrap"; // Import Bootstrap components for layout
import Rating from "../components/Rating"; // Import Rating component for displaying product ratings
import { actionListProduct } from "../actions/productActions"; // Import action to fetch product details
import { useDispatch, useSelector } from "react-redux"; // Import hooks for Redux state management
import { Loading } from "../components/Loader/Loading.jsx"; // Import loading component for fetching state

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL parameters
  const dispatch = useDispatch(); // Initialize dispatch function for Redux actions
  const productDetails = useSelector((state) => state.productDetails); // Access product details from Redux store
  const { loading, error, product } = productDetails; // Destructure loading, error, and product from state

  // Fetch product details when component mounts or ID changes
  useEffect(() => {
    dispatch(actionListProduct(id)); // Dispatch action to fetch product by ID
  }, [dispatch, id]); // Dependency array to run effect when dispatch or id changes

  // Conditional rendering based on loading, error, and product state
  if (loading) return <Loading />; // Show loading spinner while fetching data
  if (error) return <h2>{error}</h2>; // Show error message if there's an error fetching data
  if (!product) return <h2>Product not found</h2>; // Show message if product is not found

  return (
    <div>
      <Link to="/" className="btn btn-light"> {/* Button to navigate back to home */}
        <i className="fa-solid fa-arrow-left-long"></i> {/* Back arrow icon */}
        &nbsp; Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid /> {/* Display product image */}
        </Col>

        <Col md={4}>
          <ListGroup variant="flush"> {/* ListGroup to display product details */}
            <ListGroupItem>
              <h3>Brand: {product.brand}</h3> {/* Display product brand */}
            </ListGroupItem>
            <ListGroupItem>
              <h3>{product.name}</h3> {/* Display product name */}
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating} 
                text={` ${product.numReviews} Reviews`} // Display rating and number of reviews
              />
            </ListGroupItem>
            <ListGroupItem>
              <p>{product.description}</p> {/* Display product description */}
            </ListGroupItem>
            <ListGroupItem>
              <p>Price: ${product.price}</p> {/* Display product price */}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col>Status: </Col>
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"} {/* Display stock status */}
                </Col>
              </Row>
            </ListGroupItem>
            {/* Optional: Add "Add to Cart" button here if needed */}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails; // Exporting the ProductDetails component for use in other parts of the application
