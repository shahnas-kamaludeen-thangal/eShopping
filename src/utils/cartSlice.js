import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  productQuantity: 0,
};
const cartClice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemtoCart: (state, action) => {
      const newItem = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
        //existingProduct.price = existingProduct.price + newItem.price;
        existingProduct.price = existingProduct.price;
      } else {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
        });
      }
      state.totalPrice += newItem.price;
      state.productQuantity++;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const deleteIndex = state.cartItems.find((item) => item.id === id);
      if (deleteIndex) {
        state.totalPrice -= deleteIndex.price;
        state.productQuantity--;
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      }
    },
    increaseItem: (state, action) => {
      const id = action.payload;
      const existingIndex = state.cartItems.find((item) => item.id === id);
      if (existingIndex) {
        existingIndex.quantity++;
      }
      state.totalPrice += existingIndex.price;
      state.productQuantity += 1;
    },
    decreaseItem: (state, action) => {
      const id = action.payload;
      const existingIndex = state.cartItems.find((item) => item.id === id);

      if (existingIndex.quantity > 1) {
        if (existingIndex) {
          existingIndex.quantity--;
          state.totalPrice -= existingIndex.price;
          state.productQuantity -= 1;
        }
      }
    },
  },
});

export const { addItemtoCart, removeItem, increaseItem, decreaseItem } =
  cartClice.actions;
export default cartClice.reducer;
