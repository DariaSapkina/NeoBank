import type { IRequestFirstStep } from "@/types";
import reducer, {
  setOffers,
  setSelectedOffer,
  resetOffers,
} from "./offersSlice";

const initialState = {
  applicationId: null,
  offers: [],
  selectedOffer: null,
};

const testData: IRequestFirstStep[] = [
  {
    applicationId: 1,
    isInsuranceEnabled: true,
    isSalaryClient: true,
    monthlyPayment: 500,
    rate: 10,
    requestedAmount: 10000,
    term: 6,
    totalAmount: 10000,
  },
  {
    applicationId: 1,
    isInsuranceEnabled: true,
    isSalaryClient: false,
    monthlyPayment: 500,
    rate: 10,
    requestedAmount: 10000,
    term: 6,
    totalAmount: 10000,
  },
];

describe("offersSlice", () => {
  test("set offers and applicationId", () => {
    const state = reducer(initialState, setOffers(testData));
    expect(state.offers).toEqual(testData);
    expect(state.applicationId).toBe(testData[0].applicationId);
  });

  test("don't set applicationId if offers is empty", () => {
    const state = reducer(initialState, setOffers([]));
    expect(state.offers).toHaveLength(0);
    expect(state.applicationId).toBeNull();
  });

  test("set selected offer", () => {
    const offer = testData[0];
    const state = reducer(initialState, setSelectedOffer(offer));
    expect(state.selectedOffer).toEqual(offer);
  });

  test("reset offers", () => {
    const modifiedState = {
      applicationId: testData[0].applicationId,
      offers: testData,
      selectedOffer: testData[0],
    };
    const state = reducer(modifiedState, resetOffers());
    expect(state).toEqual(initialState);
  });
});
