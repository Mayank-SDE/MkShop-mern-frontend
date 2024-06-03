import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AllCategoriesResponse,
  AllProductsResponse,
  LatestProductResponse,
} from '../../types/api-types';

export const productAPI = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1/product/',
  }),
  endpoints: (builder) => {
    return {
      latestProducts: builder.query<LatestProductResponse, void>({
        query: () => {
          return 'latest';
        },
      }),
      getCategories: builder.query<AllCategoriesResponse, void>({
        query: () => {
          return 'categories';
        },
      }),
      getAllProducts: builder.query<AllProductsResponse, void>({
        query: () => {
          return 'admin-products';
        },
      }),
    };
  },
});

export const {
  useLatestProductsQuery,
  useGetCategoriesQuery,
  useGetAllProductsQuery,
  useLazyGetAllProductsQuery,
} = productAPI;
