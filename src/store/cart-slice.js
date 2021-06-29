import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    itens: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart(state, action) {
      const NewItem = action.payload;
      const existingItem = state.itens.find(
        (item) => item.itemId === NewItem.itemId
      );
      if (!existingItem) {
        state.itens.push({
          itemId: NewItem.itemId,
          price: NewItem.price,
          name: NewItem.name,
          quantity: 1,
          totalPrice: NewItem.price,
        });
        state.totalQuantity += 1;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += NewItem.price;
        state.totalQuantity += 1;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.itens.find((item) => item.itemId === id);
      if (existingItem.quantity === 1) {
        state.itens = state.itens.filter((item) => item.itemId !== id);
        state.totalQuantity -= 1;
      } else {
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.totalPrice -= existingItem.price;
        state.totalQuantity -= 1;
      }
    },
  },
});

export const CartActions = CartSlice.actions;
export default CartSlice;
