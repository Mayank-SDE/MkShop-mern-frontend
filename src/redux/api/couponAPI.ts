import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AllCouponResponse,
  CouponRequestBody,
  MessageResponse,
} from '../../types/api-types';
import { server } from '../store';

export const couponAPI = createApi({
  reducerPath: 'couponApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${server}/api/v1/payment/coupon/`,
    credentials: 'include',
  }),
  endpoints: (builder) => {
    return {
      createCoupon: builder.mutation<MessageResponse, CouponRequestBody>({
        query: ({ coupon, amount }) => {
          return {
            body: { coupon, amount },
            url: 'new',
            method: 'POST',
          };
        },
      }),
      getAllCoupon: builder.query<AllCouponResponse, void>({
        query: () => {
          return 'all';
        },
      }),
      deleteCoupon: builder.mutation<MessageResponse, string>({
        query: (couponId) => {
          return {
            url: couponId,
            method: 'delete',
          };
        },
      }),
    };
  },
});

export const {
  useCreateCouponMutation,
  useDeleteCouponMutation,
  useGetAllCouponQuery,
} = couponAPI;
