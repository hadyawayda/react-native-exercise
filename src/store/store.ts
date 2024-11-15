import {configureStore} from '@reduxjs/toolkit';
// import daysReducer from './daysSlice/slice';

const store = configureStore({
  reducer: {
    // days: daysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
