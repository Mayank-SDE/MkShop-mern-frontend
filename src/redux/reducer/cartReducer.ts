import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartReducerInitialState } from '../../types/reducer-types';
import { CartItem, ShippingInfo } from '../../types/types';

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
      const existingItem = state.cartItems.find(
        (item) => item.productId === action.payload.productId
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
      state.loading = false;
    },
    addToCartWithQuantity: (state, action: PayloadAction<CartItem>) => {
      state.loading = true;
      const existingItem = state.cartItems.find(
        (item) => item.productId === action.payload.productId
      );

      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
      state.loading = false;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== action.payload
      );
      state.loading = false;
    },

    deleteFromCart: (state, action: PayloadAction<string>) => {
      state.loading = true;
      const existingItem = state.cartItems.find(
        (item) => item.productId === action.payload
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.productId !== action.payload
          );
        }
      }
      state.loading = false;
    },
    calculatePrice: (state) => {
      const subTotal = state.cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
      }, 0);
      state.subTotal = subTotal;
      state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
      state.tax = Math.round(state.subTotal * 0.18);
      state.total =
        state.subTotal + state.tax + state.shippingCharges - state.discount;
    },
    applyDiscount: (state, action: PayloadAction<number>) => {
      state.loading = true;
      state.discount = action.payload;
      state.loading = false;
    },
    saveShippingInfo: (state, action: PayloadAction<ShippingInfo>) => {
      state.shippingInfo = action.payload;
    },
    resetCart: () => initialState,
  },
});

export const {
  addToCart,
  removeFromCart,
  deleteFromCart,
  calculatePrice,
  applyDiscount,
  saveShippingInfo,
  resetCart,
  addToCartWithQuantity,
} = cartReducer.actions;

export default cartReducer.reducer;
