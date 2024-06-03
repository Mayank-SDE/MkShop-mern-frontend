import { UserStateInterface } from './reducer-types';
import { Product } from './types';

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
