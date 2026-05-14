import reducer, {
  setStep,
  completeStep,
  resetApplication,
  type IApplicationSlice,
} from "./applicationSlice";

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

const testData: IApplicationSlice = {
  currentStep: 5,
  completed: {
    1: true,
    2: true,
    3: true,
    4: true,
    5: false,
  },
};

describe("applicationSlice", () => {
  test("complete step", () => {
    const state = reducer(initialState, completeStep(1));
    expect(state.completed[1]).toBe(true);
  });

  test("move to next step if previous is completed", () => {
    let state = reducer(initialState, completeStep(1));
    state = reducer(state, setStep(2));
    expect(state.currentStep).toBe(2);
  });

  test("don't move forward if previous step is not completed", () => {
    const state = reducer(initialState, setStep(3));
    expect(state.currentStep).toBe(1);
  });

  test("allow moving backwards", () => {
    const state = reducer(testData, setStep(1));
    expect(state.currentStep).toBe(1);
  });

  test("reset application", () => {
    const state = reducer(testData, resetApplication());
    expect(state).toEqual(initialState);
  });
});
