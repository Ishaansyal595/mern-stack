// Import necessary functions and reducers
import { combineReducers } from "redux"; // To combine multiple reducers into one
import { configureStore } from "@reduxjs/toolkit"; // To create the Redux store with good defaults
import {
  productListReducer, // Reducer for managing the product list state
  productDetailsReducer, // Reducer for managing product details state
} from "./reducers/ProductReducer"; // Importing your reducers

// Combine your reducers into a single reducer function
const reducer = combineReducers({
  productList: productListReducer, // State slice for product list
  productDetails: productDetailsReducer, // State slice for product details
});

// Configure your store using configureStore from @reduxjs/toolkit
const store = configureStore({
  reducer, // The root reducer created by combining your individual reducers
  // No need for preloadedState if it's empty; can be added later if needed
});

// Export the configured store so it can be used in the app
export default store;
