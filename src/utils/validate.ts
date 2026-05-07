import type { FormikErrors } from "formik";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { IFormInput, IFormInputSecondStep } from "@/types";

dayjs.extend(customParseFormat);

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
  if (!date || !dayjs(date, "DD.MM.YYYY", true).isValid()) return false;

  return true;
};

const validateIsAdult = (date: string) => {
  if (!validateDate(date)) return "Incorrect date of birth";

  const birthDate = dayjs(date, "DD.MM.YYYY");

  const isAdult = dayjs().diff(birthDate, "year") >= 18;

  if (!isAdult) return "Incorrect date of birth";

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

  const selectedDate = dayjs(date, "DD.MM.YYYY");

  if (selectedDate.isAfter(dayjs(),'day')) return "Incorrect date of passport issue date";

  return null;
};

const validateDivisionCode = (value: string) => {
  if (!value.includes("-"))
    return "The division code must be in format XXX-XXX";

  const passportIssueBranchError = validateStringRegExp(
    value,
    /^\d{3}-\d{3}$/,
    "The division code must be 6 digits",
  );
  if (passportIssueBranchError) return passportIssueBranchError;

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

  const passportIssueBranchError = validateDivisionCode(
    values.passportIssueBranch,
  );
  if (passportIssueBranchError)
    errors.passportIssueBranch = passportIssueBranchError;

  if (!values.employmentStatus)
    errors.employmentStatus = "Select one of the options";

  const employerINNError = validateStringRegExp(
    values.employerINN,
    /^\d{12}$/,
    "Department code must be 12 digits",
  );
  if (employerINNError) errors.employerINN = employerINNError;

  const salaryError = validateStringRegExp(
    values.salary,
    /^\d+$/,
    "Enter your salary",
  );
  if (salaryError) errors.salary = salaryError;

  if (!values.position) errors.position = "Select one of the options";

  if (Number(values.workExperienceTotal) < Number(values.workExperienceCurrent)) {
    errors.workExperienceCurrent = "Current experience cannot be greater than total";
    errors.workExperienceTotal = "Total experience cannot be less than current";
  }

  const workExperienceTotalError = validateStringRegExp(
    values.workExperienceTotal,
    /^\d{1,2}$/,
    "Enter your work experience total",
  );
  if (workExperienceTotalError)
    errors.workExperienceTotal = workExperienceTotalError;

  const workExperienceCurrentError = validateStringRegExp(
    values.workExperienceCurrent,
    /^\d{1,2}$/,
    "Enter your work experience current",
  );
  if (workExperienceCurrentError)
    errors.workExperienceCurrent = workExperienceCurrentError;

  return errors;
};
