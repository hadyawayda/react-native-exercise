import { configureStore } from '@reduxjs/toolkit';
import companyDataReducer from './companyDataSlice/slice';
import voicePreferenceReducer from './userPreferences/slice';

const store = configureStore({
  reducer: {
    companyData: companyDataReducer,
    voicePreference: voicePreferenceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
