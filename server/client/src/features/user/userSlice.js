import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    userLogin: (state) => {
      state.isLogin = true;
    },
    userLogout: (state) => {
      state.isLogin = false;
    },
  },
});
export const { userLogin, userLogout, setUser } = userSlice.actions;

export default userSlice.reducer;
