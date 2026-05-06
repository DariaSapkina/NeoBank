import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IRequestFirstStep } from "@/api";

interface IOffersSlice {
  applicationId: number | null;
  offers: IRequestFirstStep[];
  selectedOffer: IRequestFirstStep | null;
};

const initialState: IOffersSlice = {
  applicationId: null,
  offers: [],
  selectedOffer: null,
};

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setOffers(state, action: PayloadAction<IRequestFirstStep[]>) {
      state.offers = action.payload;
      if (!state.offers.length) return;
      state.applicationId = state.offers[0].applicationId;
    },

    setSelectedOffer(state, action: PayloadAction<IRequestFirstStep>) {
      state.selectedOffer = action.payload;
    },

    resetOffers() {
      return initialState;
    },
  },
});

export const { setOffers, setSelectedOffer, resetOffers } = offersSlice.actions;
export default offersSlice.reducer;
