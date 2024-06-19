import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  AllUsersResponse,
  ForgotPasswordBody,
  MessageResponse,
  UserMessageResponse,
} from '../../types/api-types';
import { UserLoginBodyInterface } from '../../types/types';

export const userAPI = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://mkshop-mern-backend.onrender.com/`,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }),
  tagTypes: ['users'],
  endpoints: (builder) => {
    return {
      register: builder.mutation<MessageResponse, FormData>({
        query: (userFormData) => {
          return {
            url: 'auth/register',
            method: 'POST',
            body: userFormData,
          };
        },
        invalidatesTags: ['users'],
      }),
      update: builder.mutation<UserMessageResponse, FormData>({
        query: (updateFormData) => ({
          url: 'auth/profile/update',
          method: 'PUT',
          body: updateFormData,
        }),
        invalidatesTags: ['users'],
      }),
      login: builder.mutation<UserMessageResponse, UserLoginBodyInterface>({
        query: (loginInformation) => {
          return {
            url: 'auth/login',
            method: 'POST',
            body: loginInformation,
          };
        },
        invalidatesTags: ['users'],
      }),
      logout: builder.mutation<MessageResponse, void>({
        query: () => {
          return {
            url: 'auth/logout',
            method: 'GET',
          };
        },
      }),
      loggedIn: builder.query<UserMessageResponse, void>({
        query: () => {
          return 'auth/login/success';
        },
      }),
      deleteUser: builder.mutation<MessageResponse, string>({
        query: (userId) => {
          return {
            url: `auth/profile/delete/${userId}`,
            method: 'DELETE',
          };
        },
        invalidatesTags: ['users'],
      }),
      allUsers: builder.query<AllUsersResponse, void>({
        query: () => 'auth/all',
        providesTags: ['users'],
      }),
      forgotPassword: builder.mutation<UserMessageResponse, ForgotPasswordBody>(
        {
          query: (verifyPasswordBody) => {
            return {
              method: 'POST',
              body: verifyPasswordBody,
              url: 'auth/reset/password',
            };
          },
        }
      ),
    };
  },
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useLoggedInQuery,
  useUpdateMutation,
  useDeleteUserMutation,
  useAllUsersQuery,
  useForgotPasswordMutation,
} = userAPI;
