import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MessageResponse, UserMessageResponse } from '../../types/api-types';
import { UserLoginBodyInterface } from '../../types/types';

export const userAPI = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3000/auth/`,
    credentials: 'include',
  }),
  endpoints: (builder) => {
    return {
      register: builder.mutation<MessageResponse, FormData>({
        query: (userFormData) => {
          return {
            url: 'register',
            method: 'POST',
            body: userFormData,
          };
        },
      }),
      update: builder.mutation<UserMessageResponse, FormData>({
        query: (updateFormData) => ({
          url: 'profile/update',
          method: 'PUT',
          body: updateFormData,
        }),
      }),
      login: builder.mutation<UserMessageResponse, UserLoginBodyInterface>({
        query: (loginInformation) => {
          return {
            url: 'login',
            method: 'POST',
            body: loginInformation,
          };
        },
      }),
      logout: builder.mutation<MessageResponse, void>({
        query: () => {
          return {
            url: 'logout',
            method: 'GET',
          };
        },
      }),
      loggedIn: builder.query<UserMessageResponse, void>({
        query: () => {
          return 'login/success';
        },
      }),
      deleteUser: builder.mutation<MessageResponse, string>({
        query: (userId) => {
          return {
            url: `profile/delete/${userId}`,
            method: 'DELETE',
          };
        },
      }),
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
} = userAPI;
