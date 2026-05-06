import { URL } from "@/constants";
import axios from "axios";

export const createDocument = async (applicationId: number) => {
  try {
    const res = await axios.post(`${URL}/document/${applicationId}`);
    return res;
  } catch (e) {
    if (e instanceof Error) console.log(e);
    return null;
  }
};
