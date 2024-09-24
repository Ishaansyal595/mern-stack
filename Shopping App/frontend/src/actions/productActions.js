import axios from "axios"; // Importing axios for making HTTP requests
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstant"; // Importing action types

// Function to list all products
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST }); // Dispatching action to indicate the request has started
    const { data } = await axios.get("/products"); // Sending GET request to fetch all products
    console.log(`The data is: ${data}`);
    dispatch({
      type: PRODUCT_LIST_SUCCESS, // Dispatching success action with fetched data
      payload: data,
    });
  } catch (error) {
    // Handling errors
    const errorMessage =
      error.response && error.response.data.message // Check if there's a specific error message from the server
        ? error.response.data.message // Use that message
        : error.message; // Otherwise, use the general error message
    dispatch({
      type: PRODUCT_LIST_FAIL, // Dispatching failure action
      payload: errorMessage, // Sending the error message
    });
  }
};

// Function to get details of a specific product by ID
export const actionListProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST }); // Dispatching action to indicate the request has started
    const { data } = await axios.get(`/products/${id}`); // Sending GET request to fetch product details by ID
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS, // Dispatching success action with fetched product data
      payload: data,
    });
  } catch (error) {
    // Handling errors
    const errorMessage =
      error.response && error.response.data.message // Check if there's a specific error message from the server
        ? error.response.data.message // Use that message
        : error.message; // Otherwise, use the general error message
    dispatch({
      type: PRODUCT_DETAILS_FAIL, // Dispatching failure action
      payload: errorMessage, // Sending the error message
    });
  }
};
