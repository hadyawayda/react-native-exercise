import {configureStore} from '@reduxjs/toolkit';
import companyDataReducer from './companyDataSlice/slice';

const store = configureStore({
  reducer: {
    companyData: companyDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
