import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import Cookies from "js-cookie";

type TUser = {
  role: string;
  userId: string;
};

type TInitilaState = {
  user: TUser | null;
  token: null | string;
};
const initialState: TInitilaState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      
      // Set token in cookie with proper configuration
      Cookies.set("auth", token, {
        expires: 7, // 7 days
        path: "/",  // Available across all paths
        sameSite: "lax", // Less strict than 'strict' for better compatibility
        secure: process.env.NODE_ENV === "production" // Only use HTTPS in production
      });
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;

      // remove token from cookie
      Cookies.remove("auth");
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export const selectUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => !!state.auth.token;
export default authSlice.reducer;
