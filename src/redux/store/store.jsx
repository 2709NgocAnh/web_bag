import { configureStore } from "@reduxjs/toolkit";
import productReducer from "~/redux/slice/product/ProductSlice";
import authReducer from "../slice/auth/AuthSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    user: authReducer,
  },
});

// const { dispatch } = store;

// export { store, dispatch };
export default store;
