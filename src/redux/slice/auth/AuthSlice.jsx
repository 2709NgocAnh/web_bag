import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { dispatch } from "~/redux/store/store";
import * as registerService from "../../../services/registerService";

const initialState = {
  user: "",
  token: "",
  err: "",
  isSucess: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  //   reduces: {
  //     startLoading: (state) => {
  //       state.isLoading = true;
  //     },
  //     stopLoading: (state) => {
  //       state.isLoading = false;
  //     },
  //     gotSuccess: (state) => {
  //       state.isSucess = true;
  //     },
  //     hasError: (state, action) => {
  //       state.isLoading = false;
  //       state.err = action.payload;
  //     },
  //     userRegister: (state, action) => {
  //       state.user = action.payload;
  //     },
  //   },
  extraReducers: (builder) => {
    builder
      .addCase(signUpRegister.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(signUpRegister.fulfilled, (state, action) => {
        state.isLoading = true;
        state.isSucess = action.payload;
      });
    //   .addCase(userLogin.pending, (state) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(userLogin.fulfilled, (state, action) => {
    //     state.isLoading = true;
    //     state.isSucess = action.payload;
    //   });
  },
});

export default authSlice.reducer;
//
//
// export const signUpRegister = (user) => {
//   dispatch(authSlice.actions.startLoading());
//   return async () => {
//     const navigate = useNavigate();
//     try {
//       const { success } = await registerService.signUpRegister(user);
//       if (success) {
//         dispatch(authSlice.actions.gotSuccess());
//         navigate("/veryfyEmail");
//       }
//     } catch (e) {
//       console.log(e);
//       dispatch(authSlice.actions.hasError(e));
//     }
//   };
// };
export const signUpRegister = (user) =>
  createAsyncThunk("user/signUpRegister", async () => {
    try {
      const response = await registerService.signUpRegister(user);

      return response.success;
    } catch (e) {
      console.log(e);
    }
  });

// export const userLogin = (email, password) =>
//   createAsyncThunk("user/userLogin", async () => {
//     try {
//       const response = await registerService.signUpRegister(email, password);
//       return response.success;
//     } catch (e) {
//       console.log(e);
//     }
//   });
