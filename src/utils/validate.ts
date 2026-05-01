import type { FormikErrors } from "formik";
import type { IFormInput, IFormInputSecondStep } from "@/components";

const validateStringRegExp = (
  value: string | number,
  regExp: RegExp,
  errMessage: string,
) => {
  const currentValue = typeof value === "number" ? String(value) : value;

  if (!value || !regExp.test(currentValue)) {
    return errMessage;
  }

  return null;
};

export const emailValidate = (email: string) => {
  const reg_exp_email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return validateStringRegExp(email, reg_exp_email, "Incorrect email address");
};

const validateDate = (date: string) => {
  if (!date || date.includes("-")) return false;

  const month = date.split(".")[1];

  if (Number(month) > 12) return false;

  return true;
};

const validateIsAdult = (date: string) => {
  if (!validateDate(date)) return "Incorrect date of birth";

  const [day, month, year] = date.split(".");

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

  if (!values.firstName || values.firstName.length < 2)
    errors.firstName = "Enter your first name";

  if (!values.lastName || values.lastName.length < 2)
    errors.lastName = "Enter your last name";

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

const validateIsDateAfterNow = (date: string) => {
  if (!validateDate(date)) return "Incorrect date of passport issue date";

  const [day, month, year] = date.split(".");

  const currentDate = new Date(Number(year), Number(month) - 1, Number(day));

  if (currentDate.getTime() > Date.now())
    return "Incorrect date of passport issue date";

  return null;
};

export const validateFormSecondStep = (
  values: IFormInputSecondStep,
): FormikErrors<IFormInputSecondStep> => {
  const errors: FormikErrors<IFormInputSecondStep> = {};

  if (!values.gender) errors.gender = "Select one of the options";

  if (!values.maritalStatus) errors.maritalStatus = "Select one of the options";

  if (!values.dependentAmount)
    errors.dependentAmount = "Select one of the options";

  const passportIssueDateError = validateIsDateAfterNow(
    values.passportIssueDate,
  );
  if (passportIssueDateError) errors.passportIssueDate = passportIssueDateError;

  const passportIssueBranchError = validateStringRegExp(
    values.passportIssueBranch,
    /^\d{3}-\d{3}$/,
    "The series must be 6 digits",
  );
  if (passportIssueBranchError)
    errors.passportIssueBranch = passportIssueBranchError;

  if (!values.employmentStatus)
    errors.employmentStatus = "Select one of the options";

  const employerINNError = validateStringRegExp(
    values.employerINN,
    /^\d{12}$/,
    "The series must be 12 digits",
  );
  if (employerINNError) errors.employerINN = employerINNError;

  const salaryError = validateStringRegExp(
    values.salary,
    /^\d+$/,
    "Enter your salary",
  );
  if (salaryError) errors.salary = salaryError;

  if (!values.position) errors.position = "Select one of the options";

  const workExperienceTotalError = validateStringRegExp(
    values.workExperienceTotal,
    /^\d{1,2}$/,
    "Enter your salary",
  );
  if (workExperienceTotalError)
    errors.workExperienceTotal = workExperienceTotalError;

  const workExperienceCurrentError = validateStringRegExp(
    values.workExperienceCurrent,
    /^\d{1,2}$/,
    "Enter your salary",
  );
  if (workExperienceCurrentError)
    errors.workExperienceCurrent = workExperienceCurrentError;

  return errors;
};
