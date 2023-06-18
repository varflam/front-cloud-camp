import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sliceState } from '../types';



const initialState: sliceState = {
  nickname: null,
  name: null,
  surname: null,
  phone: null,
  email: null,
  sex: null,
  advantages: null,
  radio: null,
  checkbox: null,
  about: null,
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<string | null>) => {
      state.phone = action.payload;
    },
    setEmail: (state, action: PayloadAction<string | null>) => {
      state.email = action.payload;
    }
  }
});

export const {setEmail, setPhone} = formSlice.actions;

export default formSlice.reducer;