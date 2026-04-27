import type { FormikErrors } from "formik";
import type { IFormInput } from "@/components";

const validateStringRegExp = (
  value: string,
  regExp: RegExp,
  errMessage: string,
) => {
  if (!value || !regExp.test(value)) {
    return errMessage;
  }

  return null;
};

export const emailValidate = (email: string) => {
  const reg_exp_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return validateStringRegExp(email, reg_exp_email, "Incorrect email address");
};

const validateIsAdult = (date: string) => {
  if (!date || date.includes("-")) return "Incorrect date of birth";

  const [day, month, year] = date.split(".");

  if (Number(month) > 12) return "Incorrect date of birth";

  const birthDate = new Date(Number(year), Number(month) - 1, Number(day));
  const today = new Date();

  const adultDate = new Date(
    birthDate.getFullYear() + 18,
    birthDate.getMonth(),
    birthDate.getDate(),
  );

  if (!(adultDate <= today)) return "Incorrect date of birth";

  return null;
};

export const validateFormFirstStep = (
  values: IFormInput,
): FormikErrors<IFormInput> => {
  const errors: FormikErrors<IFormInput> = {};

  if (!values.firstName) errors.firstName = "Enter your first name";

  if (!values.lastName) errors.lastName = "Enter your last name";

  const emailError = emailValidate(values.email);
  if (emailError) errors.email = emailError;

  const birthdateError = validateIsAdult(values.birthdate);
  if (birthdateError) errors.birthdate = birthdateError;

  const passportSeriesError = validateStringRegExp(
    values.passportSeries,
    /^\d{4}$/,
    "The series must be 4 digits",
  );
  if (passportSeriesError) errors.passportSeries = passportSeriesError;

  const passportNumberError = validateStringRegExp(
    values.passportNumber,
    /^\d{6}$/,
    "The number must be 6 digits",
  );
  if (passportNumberError) errors.passportNumber = passportNumberError;

  if (values.amount > 600000 || values.amount < 150000)
    errors.amount = "Out of range";

  return errors;
};
