import productReducer from "./product/ProductSlice";
import authReducer from "./auth/AuthSlice";
import categoryReducer from "./auth/AuthSlice";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  auth: authReducer,
});

export { rootReducer };
