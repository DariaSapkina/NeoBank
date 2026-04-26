import type { IFormInput, IInputBase } from "@/components";

export interface IInputs extends IInputBase {
  type?: "text" | "email" | "date";
  name: keyof IFormInput;
};

export const INPUTS_INFO: IInputs[] = [
  {
    id: "loan-lastName",
    type: "text",
    name: "lastName",
    placeholder: "For Example Doe",
    label: "Your last name",
    required: true,
    tag: "input",
  },
  {
    id: "loan-firstName",
    type: "text",
    name: "firstName",
    placeholder: "For Example Jhon",
    label: "Your first name",
    required: true,
    tag: "input",
  },
  {
    id: "loan-patronymic",
    type: "text",
    name: "middleName",
    placeholder: "For Example Victorovich",
    label: "Your patronymic",
    required: false,
    tag: "input",
  },
  {
    id: "loan-term",
    name: "term",
    label: "Select term",
    tag: "select",
    required: true,
    options: [
      {
        value: 6,
        title: "6 month",
      },
      {
        value: 12,
        title: "12 month",
      },
      {
        value: 18,
        title: "18 month",
      },
      {
        value: 24,
        title: "24 month",
      },
    ],
  },
  {
    id: "loan-email",
    type: "email",
    name: "email",
    placeholder: "test@gmail.com",
    label: "Your email",
    tag: "input",
    required: true,
  },
  {
    id: "loan-date",
    type: "text",
    name: "birthdate",
    placeholder: "Select Date and Time",
    label: "Your date of birth",
    tag: "input",
    required: true,
  },
  {
    id: "loan-passportSeries",
    type: "text",
    name: "passportSeries",
    placeholder: "0000",
    label: "Your passport series",
    tag: "input",
    required: true,
  },
  {
    id: "loan-passportNumber",
    type: "text",
    name: "passportNumber",
    placeholder: "000000",
    label: "Your passport number",
    tag: "input",
    required: true,
  },
];
