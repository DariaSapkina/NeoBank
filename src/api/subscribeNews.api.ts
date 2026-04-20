import axios from "axios";
import { URL } from "@/constants";

export const subscribeNews = async (email: string) => {
  return axios.post(`${URL}/email`, { email });
};
