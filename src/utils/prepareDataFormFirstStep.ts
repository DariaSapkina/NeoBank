import type { FormikValues } from "formik";
import type { IFormInput } from "@/types";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

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
        const date = dayjs(value,"DD.MM.YYYY").format("YYYY-MM-DD");
        
        return [key, `${date}`];
      }

      return [key, value];
    }),
  ) as IFormInput;
};
