import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartReducerInitialState } from '../../types/reducer-types';
import { CartItem } from '../../types/types';
const initialState: CartReducerInitialState = {
  loading: false,
  cartItems: [],
  subTotal: 0,
  discount: 0,
  shippingCharges: 0,
  tax: 0,
  total: 0,
  shippingInfo: {
    address: '',
    billingName: '',
    city: '',
    country: '',
    email: '',
    phoneNumber: '',
    pinCode: '',
    state: '',
  },
};
export const cartReducer = createSlice({
  name: 'cartReducer',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.loading = true;
      const existingItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if (existingItemIndex !== -1) {
        state.cartItems[existingItemIndex] = action.payload;
      } else {
        state.cartItems.push(action.payload);
      }
      state.loading = false;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.cartItems = state.cartItems.filter((cartItems) => {
        return cartItems.productId !== action.payload;
      });
      state.loading = false;
    },
  },
});

export const { addToCart, removeFromCart } = cartReducer.actions;
