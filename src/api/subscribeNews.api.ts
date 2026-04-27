import axios from "axios";
import { URL } from "@/constants";

export const subscribeNews = async (email: string) => {
  try {
    const res = await axios.post(`${URL}/email`, { email });
    return res;
  } catch (e) {
    if (e instanceof Error) {
      console.log(e.message);
    }
    return null;
  }
};
