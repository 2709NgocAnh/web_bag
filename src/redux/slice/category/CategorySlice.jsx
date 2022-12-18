import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as categoryService from "../../../services/categoryService";
const initialState = {
  categoryList: [],
  isLoading: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.categoryList = action.payload;
        state.isLoading = true;
      });
  },
});

export default categorySlice.reducer;
//
export const getCategory = createAsyncThunk(
  "category/getCategory",
  async () => {
    try {
      const response = await categoryService.getCategoryService();
      console.log(response.categotys);
      return response.categotys;
    } catch (e) {
      console.log(e);
    }
  }
);
