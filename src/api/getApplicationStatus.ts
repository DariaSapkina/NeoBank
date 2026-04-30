import { URL } from "@/constants";
import axios from "axios";

export const getApplicationStatus = async (applicationId: number) => {
  try {
    const res = await axios.get(`${URL}/admin/application/${applicationId}`);
    return res.data;
  } catch (e) {
    if (e instanceof Error) console.log(e);
    return null;
  }
};
