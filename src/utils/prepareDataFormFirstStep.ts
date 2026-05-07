import type { FormikValues } from "formik";
import type { IFormInput } from "@/types";

export const prepareDataFormFirstStep = (values: FormikValues): IFormInput => {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => {
      if (typeof value === "string") {
        value = value.trim();
      }

      if (key === "middleName") {
        return [key, value === "" ? null : value];
      }

      if (key === "birthdate" && typeof value === "string") {
        const date = new Date(value);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return [key, `${year}-${month}-${day}`];
      }

      return [key, value];
    }),
  ) as IFormInput;
};
