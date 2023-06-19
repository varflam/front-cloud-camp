import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { sliceState, gender } from '../types';



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
    },
    setNickname: (state, action: PayloadAction<string | null>) => {
      state.nickname = action.payload;
    },
    setName: (state, action: PayloadAction<string | null>) => {
      state.name = action.payload;
    },
    setSurname: (state, action: PayloadAction<string | null>) => {
      state.surname = action.payload;
    },
    setSex: (state, action: PayloadAction<gender | null>) => {
      state.surname = action.payload;
    },
    setAdvantages: (state, action: PayloadAction<string[] | null>) => {
      state.advantages = action.payload;
    },
    setRadio: (state, action: PayloadAction<number | null>) => {
      state.radio = action.payload;
    },
    setCheckbox: (state, action: PayloadAction<number[] | null>) => {
      state.checkbox = action.payload;
    },
    setAbout: (state, action: PayloadAction<string | null>) => {
      state.about = action.payload;
    },
  }
});

export const {setEmail, setPhone, setAbout, setAdvantages, setCheckbox, setName, setNickname, setRadio, setSex, setSurname} = formSlice.actions;

export default formSlice.reducer;