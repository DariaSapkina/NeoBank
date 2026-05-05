import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type StepRegistration = 1 | 2 | 3 | 4 | 5;

interface IApplicationSlice {
  currentStep: StepRegistration;
  completed: Record<StepRegistration, boolean>;
}

const initialState: IApplicationSlice = {
  currentStep: 1,
  completed: {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  },
};

const applicationSlice = createSlice({
  name: "applicartion",
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<StepRegistration>) {
      const nextStep = action.payload;

      if (nextStep < state.currentStep) {
        state.currentStep = nextStep;
        return;
      }

      const prevStep = (nextStep - 1) as StepRegistration;

      if (prevStep && state.completed[prevStep]) {
        state.currentStep = nextStep;
      }
    },

    completeStep(state, action: PayloadAction<StepRegistration>) {
      const step = action.payload;
      if (step) state.completed[step] = true;
    },

    resetApplication() {
      return initialState;
    },
  },
});

export const { setStep, resetApplication, completeStep } =
  applicationSlice.actions;
export default applicationSlice.reducer;
