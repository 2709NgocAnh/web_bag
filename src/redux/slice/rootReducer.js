import productReducer from "./product/ProductSlice";
import categoryReducer from "./category/CategorySlice";
import authReducer from "./auth/AuthSlice";
import sliderReducer from "./slider/SliderSlice";

import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  auth: authReducer,
  slider: sliderReducer,
});

export { rootReducer };
