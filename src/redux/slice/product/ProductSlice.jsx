import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as productService from "../../../services/productService";

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const response = await productService.getHomeListProduct();
    return response.products;
  } catch (e) {
    console.log(e);
  }
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    isLoading: false,
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoading = false;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.productList = action.payload;
    },
  },
});

export default productSlice.reducer;
//
