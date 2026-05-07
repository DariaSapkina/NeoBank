import axios from "axios";
import type { IFormInput, IRequestFirstStep } from "@/types";
import { URL } from "@/constants";

export const sendFirstStepForm = async (value: IFormInput) => {
  try {
    const res = await axios.post<IRequestFirstStep[]>(
      `${URL}/application`,
      value,
    );
    return res.data;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
    return null;
  }
};
