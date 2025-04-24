import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../configs/axios";

export const fetchUserSignup = createAsyncThunk(
  "user/signup",
  async ( userData ) => {
    try {
      const response = await API.post("auth/signup", userData);
      return response.data;
    } catch (error) {
      console.log("Error while signup : " + error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { isLoading: false, isError: false, data: {} },
  extraReducers: (builder) => {
    // Signup
    builder.addCase(fetchUserSignup.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchUserSignup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload?.data;
    });
    builder.addCase(fetchUserSignup.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
