import axios from "axios";
import type { IRequestFirstStep } from "./sendFirstStepForm.api";
import { URL } from "@/constants";

export const selectOffer = async (offer: IRequestFirstStep) => {
  try {
    const res = await axios.post(`${URL}/application/apply`, offer);
    return res;
  } catch (e) {
    if (e instanceof Error) console.log(e);
    return null;
  }
};
