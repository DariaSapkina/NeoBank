import { URL } from "@/constants";
import axios from "axios";

export const sendCode = async (code: string, applicationId: number) => {
  try {
    const res = await axios.post(
      `${URL}/document/${applicationId}/sign/code`,
      Number(code),
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return res;
  } catch (e) {
    if (e instanceof Error) console.log(e);
    return null;
  }
};
