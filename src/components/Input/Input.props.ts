export interface IFormInput {
  amount: number;
  term: number;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  birthdate: string;
  passportSeries: string;
  passportNumber: string;
}

export interface IFormInputSecondStep {
  gender: "MALE" | "FAMALE" | "";
  maritalStatus: "MARRIED" | "DIVORCED" | "SINGLE" | "WIDOW_WIDOWER" | "";
  dependentAmount: number | string;
  passportIssueDate: string;
  passportIssueBranch: string;
  employmentStatus:
    | "UNEMPLOYED"
    | "SELF_EMPLOYED"
    | "EMPLOYED"
    | "BUSINESS_OWNER"
    | "";
  employerINN: number | string;
  salary: number | string;
  position: "WORKER" | "MID_MANAGER" | "TOP_MANAGER" | "OWNER" | "";
  workExperienceTotal: number | string;
  workExperienceCurrent: number | string;
}

export type TInputOption = {
  title: string;
  value: number | string;
};

export interface IInputBase {
  id: string;
  placeholder?: string;
  label: string;
  required?: boolean;
  options?: TInputOption[];
}

export interface IInputProps extends IInputBase {
  type?: string;
  name: string;
  size?: string;
}
