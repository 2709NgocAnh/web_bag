import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as registerService from "../../../services/registerService";
export const signUpRegister = createAsyncThunk(
  "user/signUpRegister",
  async (user) => {
    try {
      console.log(user);
      const response = await registerService.signUpRegister(user);
      return response.success;
    } catch (e) {
      console.log(e);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
    token: "",
    err: "",
    isSucess: false,
    isLoading: false,
  },
  extraReducers: {
    [signUpRegister.pending]: (state) => {
      state.isLoading = false;
    },
    [signUpRegister.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.isSucess = action.payload;
    },
    [signInRegister.pending]: (state) => {
      state.isLoading = false;
    },
    [signInRegister.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.isSucess = action.payload;
    },
  },
});

export default authSlice.reducer;

// export function signUpRegister() {
//   createAsyncThunk("user/signUpRegister", async (user) => {
//     try {
//       console.log(user);

//       const response = await registerService.signUpRegister(user);
//       return response.success;
//     } catch (e) {
//       console.log(e);
//     }
//   });
// }

export function signInRegister(email, password) {
  createAsyncThunk("user/userLogin", async () => {
    try {
      const response = await registerService.signInRegister(email, password);
      return response.success;
    } catch (e) {
      console.log(e);
    }
  });
}
