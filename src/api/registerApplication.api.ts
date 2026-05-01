import { URL } from "@/constants";
import axios from "axios";

export interface IRequestSecondStep {
  gender: "MALE" | "FAMALE";
  maritalStatus: "MARRIED" | "DIVORCED" | "SINGLE" | "WIDOW_WIDOWER";
  dependentAmount: number;
  passportIssueDate: string;
  passportIssueBranch: string;
  employment: {
    employmentStatus:
      | "UNEMPLOYED"
      | "SELF_EMPLOYED"
      | "EMPLOYED"
      | "BUSINESS_OWNER";
    employerINN: string;
    salary: number;
    position: "WORKER" | "MID_MANAGER" | "TOP_MANAGER" | "OWNER";
    workExperienceTotal: number;
    workExperienceCurrent: number;
  };
  account: string;
}

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
