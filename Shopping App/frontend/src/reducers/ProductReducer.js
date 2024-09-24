import {
  PRODUCT_DETAILS_FAIL, // Import the constant for handling product details failure
  PRODUCT_DETAILS_REQUEST, // Import the constant for requesting product details
  PRODUCT_DETAILS_SUCCESS, // Import the constant for successfully receiving product details
  PRODUCT_LIST_FAIL, // Import the constant for handling product list failure
  PRODUCT_LIST_REQUEST, // Import the constant for requesting product list
  PRODUCT_LIST_SUCCESS, // Import the constant for successfully receiving product list
} from "../constants/productConstant"; // Import all constants from productConstant module

// Reducer for managing the list of products
export const productListReducer = (state = { products: [] }, action) => {
  // Initialize the state with an empty array of products
  switch (action.type) {
    // Check if the action type is PRODUCT_LIST_REQUEST
    case PRODUCT_LIST_REQUEST:
      // Return a new state with loading set to true and an empty products array
      console.log(`PRODUCT_LIST_REQUEST`)
      return { loading: true, products: [] };

    // Check if the action type is PRODUCT_LIST_SUCCESS
    case PRODUCT_LIST_SUCCESS:
      // Return a new state with loading set to false and the products from action payload
      return { loading: false, products: action.payload };

    // Check if the action type is PRODUCT_LIST_FAIL
    case PRODUCT_LIST_FAIL:
      // Return a new state with loading set to false and an error from action payload
      return { loading: false, error: action.payload };

    // Return the current state if no matching action type is found
    default:
      return state;
  }
};

// Reducer for managing the details of a single product
export const productDetailsReducer = (
  state = { product: { reviews: [] }, loading: false, error: null }, // Initialize state with an empty product object and reviews array
  action
) => {
  // Switch case to handle different action types
  switch (action.type) {
    // Check if the action type is PRODUCT_DETAILS_REQUEST
    case PRODUCT_DETAILS_REQUEST:
      // Return the current state with loading set to true
      return { loading: true, ...state };

    // Check if the action type is PRODUCT_DETAILS_SUCCESS
    case PRODUCT_DETAILS_SUCCESS:
      // Return a new state with loading set to false and product details from action payload
      return { loading: false, product: action.payload };

    // Check if the action type is PRODUCT_DETAILS_FAIL
    case PRODUCT_DETAILS_FAIL:
      // Return a new state with loading set to false and an error from action payload
      return { loading: false, error: action.payload };

    // Return the current state if no matching action type is found
    default:
      return state;
  }
};
