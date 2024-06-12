import { CartItem, ShippingInfo } from './types';

export interface UserStateInterface {
  _id: string;
  username: string;
  image: string | File | null;
  role: string;
  email: string;
  password: string;
  gender: string;
  dob: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserReducerInitialState {
  user: UserStateInterface | null;
  loading: boolean;
}

export interface CartReducerInitialState {
  loading: boolean;
  cartItems: CartItem[];
  subTotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  shippingInfo: ShippingInfo;
}
