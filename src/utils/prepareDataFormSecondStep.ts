import type { IRequestSecondStep } from "@/types";
import type { FormikValues } from "formik";

export const prepareDataFormSecondStep = (
  values: FormikValues,
): IRequestSecondStep => {
  const date = new Date(values.passportIssueDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const preparedDate = `${year}-${month}-${day}`;

  return {
    gender: values.gender,
    maritalStatus: values.maritalStatus,
    dependentAmount: Number(values.dependentAmount),
    passportIssueDate: preparedDate,
    passportIssueBranch: values.passportIssueBranch,
    employment: {
      employmentStatus: values.employmentStatus,
      employerINN: values.employerINN,
      salary: Number(values.salary),
      position: values.position,
      workExperienceTotal: Number(values.workExperienceTotal),
      workExperienceCurrent: Number(values.workExperienceCurrent),
    },
    account: "11223344556677889900",
  };
};
