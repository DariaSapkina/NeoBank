import axios from "axios";
import type { IFormInput } from "@/components";
import { URL } from "@/constants";

export interface IRequestFirstStep {
  applicationId: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
  monthlyPayment: number;
  rate: number;
  requestedAmount: number;
  term: number;
  totalAmount: number;
}

export const sendFirstStepForm = async (value: IFormInput) => {
  try {
    const res = await axios.post(`${URL}/application`, value);
    return res.data as IRequestFirstStep[];
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
    return null;
  }
};
