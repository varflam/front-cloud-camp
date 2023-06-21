import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import formSlice from './formSlice';
import stepSlice from './stepSlice';
import { formApiSlice } from '../api/apiSlice';

export const store = configureStore({
  reducer: {
    formSlice,
    stepSlice,
    [formApiSlice.reducerPath]: formApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(formApiSlice.middleware, thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
