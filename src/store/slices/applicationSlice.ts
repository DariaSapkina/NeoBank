import { createSlice } from "@reduxjs/toolkit";

interface IApplicationSlice {
  currentStep: number;
  maxReachedStep: number;
}

const initialState: IApplicationSlice = {
  currentStep: 1,
  maxReachedStep: 1,
};

const applicationSlice = createSlice({
  name: "applicartion",
  initialState,
  reducers: {
    setStep(state, action) {
      const nextStep = action.payload;
      if (nextStep > state.maxReachedStep + 1) return;
      state.currentStep = nextStep;
      if (nextStep > state.maxReachedStep) {
        state.maxReachedStep = nextStep;
      }
    },
    resetSteps(state) {
      state.currentStep = 1;
      state.maxReachedStep = 1;
    },
  },
});

export const { setStep, resetSteps } = applicationSlice.actions;
export default applicationSlice.reducer;
