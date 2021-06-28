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
        state.totalQuantity = state.totalQuantity + 1;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + NewItem.price;
        state.totalQuantity = state.totalQuantity + 1;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.itens.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itens.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const CartActions = CartSlice.actions;
export default CartSlice;
