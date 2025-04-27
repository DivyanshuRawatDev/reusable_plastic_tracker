import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../configs/axios";

export const fetchUserSignup = createAsyncThunk(
  "user/signup",
  async (userData) => {
    try {
      const response = await API.post("auth/signup", userData);
      return response.data;
    } catch (error) {
      console.log("Error while signup : " + error.message);
    }
  }
);

export const fetchUserLogin = createAsyncThunk(
  "auth/login",
  async (userData) => {
    try {
      const response = await API.post("auth/login", userData);
      return response.data;
    } catch (error) {
      console.log("Error while login : " + error.message);
    }
  }
);

export const fetchDailyTips = createAsyncThunk("dailyTips", async () => {
  const response = await API.get("profile/tips");
  return response.data;
});

export const fetchAllProducts = createAsyncThunk("allProducts", async () => {
  try {
    const response = await API.get("products/get");
    return response.data;
  } catch (error) {
    console.log("Error while fetch all products : " + error);
  }
});

export const fetchAddProducts = createAsyncThunk(
  "getProducts",
  async (productData) => {
    try {
      const response = await API.post(
        "products/update/products-data",
        productData
      );
      return response.data;
    } catch (error) {
      console.log("Error while add Product : " + error);
    }
  }
);

export const fetchTopFive = createAsyncThunk("topFive", async () => {
  try {
    const response = await API.get("profile/top-5");
    return response.data;
  } catch (error) {
    console.log("Error while add Product : " + error);
  }
});

export const fetchAITip = createAsyncThunk("AITip", async () => {
  try {
    const response = await API.get("profile/ask-ai");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error while add Product : " + error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    isError: false,
    user: {},
    dailyTips: {},
    allProducts: [],
    topFive: [],
    aiTip: null,
  },
  extraReducers: (builder) => {
    // Signup
    builder.addCase(fetchUserSignup.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchUserSignup.fulfilled, (state) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchUserSignup.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Login

    builder.addCase(fetchUserLogin.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchUserLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload?.data;
    });
    builder.addCase(fetchUserLogin.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    //Daily Tips

    builder.addCase(fetchDailyTips.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchDailyTips.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.dailyTips = action.payload?.data;
    });
    builder.addCase(fetchDailyTips.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    //Fetch all products
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.allProducts = action.payload?.data;
    });
    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // Add products

    builder.addCase(fetchAddProducts.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchAddProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      // state.allProducts = action.payload?.data;
      state.user = action.payload?.data;
    });
    builder.addCase(fetchAddProducts.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    //Top Five

    builder.addCase(fetchTopFive.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTopFive.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.topFive = action.payload?.data;
    });
    builder.addCase(fetchTopFive.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    // AI Tips
    builder.addCase(fetchAITip.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchAITip.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.aiTip = action.payload?.data;
    });
    builder.addCase(fetchAITip.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default userSlice.reducer;
