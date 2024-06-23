import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AllBrandsResponse,
  AllCategoriesResponse,
  AllProductsResponse,
  DeleteProductRequestBody,
  LatestProductResponse,
  MessageResponse,
  NewProductRequestBody,
  SearchProductsRequest,
  SearchProductsResponse,
  SingleProductResponse,
  UpdateProductRequestBody,
} from '../../types/api-types';
import { server } from '../../utils/config';

export const productAPI = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${server}/api/v1/product/`,
    credentials: 'include',
    mode: 'no-cors',
  }),
  tagTypes: [
    'latest-products',
    'all-products',
    'filtered-categories',
    'filtered-brands',
    'search-products',
  ],
  endpoints: (builder) => {
    return {
      getProductDetails: builder.query<SingleProductResponse, string>({
        query: (productId) => {
          return productId;
        },
        providesTags: ['latest-products'],
      }),
      latestProducts: builder.query<LatestProductResponse, void>({
        query: () => {
          return 'latest';
        },
        providesTags: ['latest-products'],
      }),
      getFilteredCategories: builder.query<
        AllCategoriesResponse,
        { selectedBrand: string }
      >({
        query: ({ selectedBrand }) => {
          return `categories?brand=${selectedBrand}`;
        },
        providesTags: ['filtered-categories'],
      }),
      getFilteredBrands: builder.query<
        AllBrandsResponse,
        { selectedCategory: string }
      >({
        query: ({ selectedCategory }) => {
          return `brands?category=${selectedCategory}`;
        },
        providesTags: ['filtered-brands'],
      }),
      getAllProducts: builder.query<AllProductsResponse, void>({
        query: () => {
          return 'admin-products';
        },
        providesTags: ['all-products'],
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
        providesTags: ['search-products'],
      }),
      newProduct: builder.mutation<MessageResponse, NewProductRequestBody>({
        query: ({ formData }) => {
          return {
            url: 'new',
            method: 'POST',
            body: formData,
          };
        },
        invalidatesTags: [
          'latest-products',
          'all-products',
          'filtered-categories',
          'filtered-brands',
          'search-products',
        ],
      }),
      updateProduct: builder.mutation<
        MessageResponse,
        UpdateProductRequestBody
      >({
        query: ({ formData, productId }) => {
          return {
            url: productId,
            method: 'PUT',
            body: formData,
          };
        },
        invalidatesTags: [
          'latest-products',
          'all-products',
          'filtered-categories',
          'filtered-brands',
          'search-products',
        ],
      }),
      deleteProduct: builder.mutation<
        MessageResponse,
        DeleteProductRequestBody
      >({
        query: ({ productId }) => {
          return {
            url: productId,
            method: 'DELETE',
          };
        },
        invalidatesTags: [
          'latest-products',
          'all-products',
          'filtered-categories',
          'filtered-brands',
          'search-products',
        ],
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
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productAPI;
