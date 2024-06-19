import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AllOrdersResponse,
  MessageResponse,
  NewOrderRequestBody,
  OrderDetailsResponse,
} from '../../types/api-types';

export const orderAPI = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mkshop-mern-backend.onrender.com/api/v1/order/',
    credentials: 'include',
  }),
  tagTypes: ['orders'],
  endpoints: (builder) => {
    return {
      newOrder: builder.mutation<MessageResponse, NewOrderRequestBody>({
        query: (order) => {
          return {
            url: '/new',
            method: 'post',
            body: order,
          };
        },
        invalidatesTags: ['orders'],
      }),
      processOrder: builder.mutation<MessageResponse, string>({
        query: (orderId) => {
          return {
            url: orderId,
            method: 'put',
          };
        },
        invalidatesTags: ['orders'],
      }),
      deleteOrder: builder.mutation<MessageResponse, string>({
        query: (orderId) => {
          return {
            url: orderId,
            method: 'delete',
          };
        },
        invalidatesTags: ['orders'],
      }),
      myOrders: builder.query<AllOrdersResponse, string>({
        query: (userId) => {
          return `my?userId=${userId}`;
        },
        providesTags: ['orders'],
      }),
      allOrders: builder.query<AllOrdersResponse, void>({
        query: () => {
          return 'all';
        },
        providesTags: ['orders'],
      }),
      orderDetails: builder.query<OrderDetailsResponse, string>({
        query: (orderId) => {
          return `${orderId}`;
        },
        providesTags: ['orders'],
      }),
    };
  },
});

export const {
  useNewOrderMutation,
  useMyOrdersQuery,
  useAllOrdersQuery,
  useDeleteOrderMutation,
  useOrderDetailsQuery,
  useProcessOrderMutation,
} = orderAPI;
