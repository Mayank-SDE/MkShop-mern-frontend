import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  BarResponse,
  LineResponse,
  PieResponse,
  StatsResponse,
} from '../../types/api-types';

export const dashboardAPI = createApi({
  reducerPath: 'dasboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mkshop-mern-backend.onrender.com/api/v1/dashboard/',
    credentials: 'include',
  }),
  endpoints: (builder) => {
    return {
      stats: builder.query<StatsResponse, void>({
        query: () => {
          return 'stats';
        },
        keepUnusedDataFor: 0,
      }),
      bar: builder.query<BarResponse, void>({
        query: () => {
          return 'bar';
        },
        keepUnusedDataFor: 0,
      }),
      line: builder.query<LineResponse, void>({
        query: () => {
          return 'line';
        },
        keepUnusedDataFor: 0,
      }),
      pie: builder.query<PieResponse, void>({
        query: () => {
          return 'pie';
        },
        keepUnusedDataFor: 0,
      }),
    };
  },
});

export const { useBarQuery, useLineQuery, usePieQuery, useStatsQuery } =
  dashboardAPI;
