import type { IRequestSecondStep } from "@/types";
import type { FormikValues } from "formik";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const prepareDataFormSecondStep = (
  values: FormikValues,
): IRequestSecondStep => {
  const preparedDate = dayjs(values.passportIssueDate,"DD.MM.YYYY").format("YYYY-MM-DD");

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
