import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AllBrandsResponse,
  AllCategoriesResponse,
  AllProductsResponse,
  LatestProductResponse,
  MessageResponse,
  NewProductRequestBody,
  SearchProductsRequest,
  SearchProductsResponse,
} from '../../types/api-types';

export const productAPI = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1/product/',
    credentials: 'include',
  }),
  endpoints: (builder) => {
    return {
      latestProducts: builder.query<LatestProductResponse, void>({
        query: () => {
          return 'latest';
        },
      }),
      getFilteredCategories: builder.query<
        AllCategoriesResponse,
        { selectedBrand: string }
      >({
        query: ({ selectedBrand }) => {
          return `categories?brand=${selectedBrand}`;
        },
      }),
      getFilteredBrands: builder.query<
        AllBrandsResponse,
        { selectedCategory: string }
      >({
        query: ({ selectedCategory }) => {
          return `brands?category=${selectedCategory}`;
        },
      }),
      getAllProducts: builder.query<AllProductsResponse, void>({
        query: () => {
          return 'admin-products';
        },
      }),
      searchProducts: builder.query<
        SearchProductsResponse,
        SearchProductsRequest
      >({
        query: ({ price, search, sort, brand, category, page }) => {
          let base = `all?search=${search}&page=${page}`;
          if (price) {
            base += `&price=${price}`;
          }
          if (sort) {
            base += `&sort=${sort}`;
          }

          if (brand) {
            base += `&brand=${brand}`;
          }
          if (category) {
            base += `&category=${category}`;
          }

          return base;
        },
      }),
      newProduct: builder.mutation<MessageResponse, NewProductRequestBody>({
        query: ({ formData }) => {
          return {
            url: 'new',
            method: 'POST',
            body: formData,
          };
        },
      }),
    };
  },
});

export const {
  useLatestProductsQuery,
  useGetFilteredBrandsQuery,
  useGetFilteredCategoriesQuery,
  useGetAllProductsQuery,
  useSearchProductsQuery,
  useNewProductMutation,
} = productAPI;
