import React, { useEffect } from "react"; // Importing React and useEffect for lifecycle management
import { Row, Col } from "react-bootstrap"; // Importing Row and Col from React Bootstrap for layout
import { useDispatch, useSelector } from "react-redux"; // Importing hooks for Redux state management

import ProductScreen from "./ProductScreen.jsx"; // Importing the ProductScreen component to display individual products
import { actionListProduct } from "../actions/productActions.js"; // Importing the action to fetch the product list
import { Loading } from "../components/Loader/Loading.jsx"; // Importing a loading component for visual feedback

export const HomeScreen = () => {
  const dispatch = useDispatch(); // Hook to get the dispatch function from Redux
  const productList = useSelector((state) => state.productList); // Accessing productList from the Redux store
  const { loading, error, products } = productList; // Destructuring loading, error, and products from productList

  // useEffect to fetch products when the component mounts
  useEffect(() => {
    dispatch(actionListProduct()); // Dispatching the action to fetch products
  }, [dispatch]); // Dependency array ensures this runs only once

  return (
    <>
      {loading ? ( // If loading is true, show the loading component
        <Loading />
      ) : error ? ( // If there's an error, display the error message
        <h2>{error}</h2>
      ) : (
        <Row>
          {/* If products are loaded successfully, display them in a row */}
          {products.map(
            (
              product 
              // Mapping through each product in the products array
            ) => (
              <Col key={product._id} md={3}>
                {/* // Creating a column for each product, using its unique ID as the key */}
                <ProductScreen product={product} /> 
                {/* Rendering the ProductScreen component with the product data */}
              </Col>
            )
          )}
        </Row>
      )}
    </>
  );
};
