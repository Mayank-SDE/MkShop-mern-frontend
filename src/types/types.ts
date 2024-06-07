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

export interface OrderItem {
  name: string;
  images: string[];
  price: number;
  quantity: number;
  _id: string;
}

export interface Order {
  _id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  pinCode: string;
  status: 'Placed' | 'Picked' | 'Packed' | 'Shipped' | 'Delivered';
  subTotal: number;
  discount: number;
  shippingCharges: number;
  tax: number;
  total: number;
  orderItems: OrderItem[];
}
