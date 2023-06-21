import { createSlice } from '@reduxjs/toolkit';
import { steps } from '../types';

const initialState: steps = {
  step: 1
};

const stepSlice = createSlice({
  name: 'stepSlice',
  initialState,
  reducers: {
    goForward: (state) => {
      if (state.step <= 3) {
        state.step += 1;
      } 
    },
    goBack: (state) => {
      if (state.step > 1) {
        state.step -= 1;
      }
    },
    startAgain: (state) => {
      state.step = 1;
    }
  }
});

export const {goBack, goForward, startAgain} = stepSlice.actions;

export default stepSlice.reducer;