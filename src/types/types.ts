export interface User {
  username: string;
  email: string;
  image: File | string | null;
  gender: string;
  role: string;
  dob: string;
  _id: string;
  password: string;
}

export interface UserLoginBodyInterface {
  username: string;
  password: string;
}

export interface UserUpdateBodyInterface {
  _id: string;
  username: string;
  image: string | File | null;
  email: string;
  password: string;
  gender: string;
  dob: Date;
}
export interface RegisterUserInformation {
  email: string;
  username: string;
  password: string;
  gender: string;
  dob: string;
  image: File | null;
}
export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  _id: string;
  shippingInfo: ShippingInfo;
  user:
    | string
    | {
        _id: string;
        name: string;
      };
  status: 'Placed' | 'Picked' | 'Packed' | 'Shipped' | 'Delivered';
  tax: number;
  shippingCharges: number;
  subTotal: number;
  total: number;
  discount: number;
  orderItems: OrderItem[];
}

export type ShippingInfo = {
  address: string;
  city: string;
  country: string;
  state: string;
  billingName: string;
  phoneNumber: string;
  pinCode: string;
  email: string;
};

export type CartItem = {
  productId: string;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
  stock: number;
};

export interface OrderItem {
  productId: string;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
}
