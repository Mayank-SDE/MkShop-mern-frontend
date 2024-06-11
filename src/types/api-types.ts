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
/*{
    description: string;
    price: string;
    rating: string;
    discountPercentage: string;
    stock: string;
    brand: string;
    category: string;
    title: string;
    images: File[];
  };
*/
