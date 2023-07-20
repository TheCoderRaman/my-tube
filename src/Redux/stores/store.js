import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './../features/settings/settingsSlice';

export const store = configureStore({
  reducer: {
    settings: settingReducer
  },
});
