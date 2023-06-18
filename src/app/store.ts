import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import formSlice from './formSlice';

export const store = configureStore({
  reducer: {
    formSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
