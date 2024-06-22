import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  UserReducerInitialState,
  UserStateInterface,
} from '../../types/reducer-types';

const initialState: UserReducerInitialState = {
  user: null,
  loading: true,
};
//user reducer
export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    userExists: (state, action: PayloadAction<UserStateInterface>) => {
      state.loading = false;
      state.user = action.payload;
    },
    userDoesNotExists: (state) => {
      state.loading = false;
      state.user = null;
    },
  },
});

export const { userExists, userDoesNotExists } = userReducer.actions;
