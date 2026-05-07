import axios from "axios";
import { URL } from "@/constants";
import type { IRequestSecondStep } from "@/types";

export const registerApplication = async (
  applicationId: number,
  values: IRequestSecondStep,
) => {
  try {
    const res = await axios.put(
      `${URL}/application/registration/${applicationId}`,
      values,
    );
    return res;
  } catch (e) {
    if (e instanceof Error) console.log(e);
    return null;
  }
};
