import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as productService from "../../../services/productService";
const initialState = {
  productList: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = true;
        state.productList = action.payload;
      });
  },
});

export default productSlice.reducer;
//
export const getProducts = createAsyncThunk("product/getProducts", async () => {
  try {
    const response = await productService.getProductService();
    console.log(response.products);
    return response.products;
  } catch (e) {
    console.log(e);
  }
});
