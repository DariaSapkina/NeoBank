import { URL } from "@/constants";
import axios from "axios";

export const signDocument = async (applicationId: number | null) => {
  try {
    const res = await axios.post(`${URL}/document/${applicationId}/sign`);
    return res;
  } catch (e) {
    if (e instanceof Error) console.log(e);
    return null;
  }
};
