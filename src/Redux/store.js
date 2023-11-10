import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice';
import localReducer from './localizationSlice';
export const store = configureStore({
  reducer: {
    users:userReducer,
    localizationState:localReducer,
  },

})