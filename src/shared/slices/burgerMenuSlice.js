import { createSlice } from "@reduxjs/toolkit";

const burgerMenuSlice = createSlice({
  name: "burgerMenu",
  initialState: {
    isMenu: false,
  },
  reducers: {
    changeMenu: (state) => {
      state.isMenu = !state.isMenu;
    },
    closeMenu: (state) => {
      state.isMenu = false;
    },
  },
});
export const { changeMenu, closeMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
