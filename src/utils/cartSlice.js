import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};
const cartClice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemtoCart: (state, action) => {},
  },
});

export const { addItemtoCart } = cartClice.actions;
export default cartClice.reducer;
