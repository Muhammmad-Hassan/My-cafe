import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      existingItem
        ? (state.cart = state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1  , size: action.payload.size , price: action.payload.price }
              : item
          ))
        : state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    },
    drop:(state,action)=>{
      state.cart = []
    }
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty ,drop} =
  CartSlice.actions;
export default CartSlice.reducer;
