import { createSlice } from "@reduxjs/toolkit";

// 1. Initial state
const initialState = {
  token: null,           // store admin token
  isAuthenticated: false // track if admin is logged in
};

// 2. Create slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Save token when admin logs in
    setToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
    // Clear token when admin logs out
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

// 3. Export actions and reducer
export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
