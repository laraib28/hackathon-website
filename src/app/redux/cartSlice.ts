import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  slug: string;
  name: string;
  price: string | number;
  quantity: number;
  size: string;
  color: string;
  image: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(item => item.slug === action.payload.slug);

      if (existingItem) {
        // Increment quantity if the item already exists
        existingItem.quantity += action.payload.quantity;
      } else {
        // Add new item to the cart
        state.items.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.slug !== action.payload);
    },
    incrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(item => item.slug === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const item = state.items.find(item => item.slug === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          // Optionally, remove item if quantity becomes zero
          state.items = state.items.filter(item => item.slug !== action.payload);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
