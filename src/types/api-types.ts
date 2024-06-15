import { UserStateInterface } from './reducer-types';
import { Order, OrderItem, Product, ShippingInfo } from './types';

export interface MessageResponse {
  success: boolean;
  message: string;
}
export type CustomError = {
  status: number;
  data: {
    success: boolean;
    message: string;
  };
};

export interface UserMessageResponse extends MessageResponse {
  user: UserStateInterface;
}

export interface AllProductsResponse {
  success: boolean;
  products: Product[];
}
export interface LatestProductResponse extends AllProductsResponse {}

export interface AllCategoriesResponse {
  success: boolean;
  categories: string[];
}

export interface AllBrandsResponse {
  success: boolean;
  brands: string[];
}

export interface SearchProductsResponse {
  success: boolean;
  products: Product[];
  totalPage: number;
}

export interface SearchProductsRequest {
  search: string;
  sort: string;
  category: string;
  price: number;
  brand: string;
  page: number;
}

export interface NewProductRequestBody {
  formData: FormData;
}
export interface UpdateProductRequestBody extends NewProductRequestBody {
  productId: string;
}
export interface DeleteProductRequestBody {
  productId: string;
}
export interface SingleProductResponse {
  success: boolean;
  product: Product;
}
export type NewOrderRequestBody = {
  shippingInfo: ShippingInfo;
  user: string;
  status: 'Placed' | 'Picked' | 'Packed' | 'Shipped' | 'Delivered';
  tax: number;
  shippingCharges: number;
  subTotal: number;
  total: number;
  discount: number;
  orderItems: OrderItem[];
};

export type AllOrdersResponse = {
  success: boolean;
  orders: Order[];
};

export type OrderDetailsResponse = {
  success: boolean;
  order: Order;
};
