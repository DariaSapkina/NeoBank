import type {
  IInputs,
  ISecondStepInputs
} from "@/types";

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

export const BASIC_INPUTS_SECOND_STEP_INFO: ISecondStepInputs[] = [
  {
    id: "loan-gender",
    name: "gender",
    label: "What's your gender",
    tag: "select",
    required: true,
    options: [
      {
        value: "",
        title: "Select gender",
      },
      {
        value: "MALE",
        title: "MALE",
      },
      {
        value: "FEMALE",
        title: "FEMALE",
      },
    ],
  },
  {
    id: "loan-maritalStatus",
    name: "maritalStatus",
    label: "Your marital status",
    tag: "select",
    required: true,
    options: [
      {
        value: "",
        title: "Select marital status",
      },
      {
        value: "MARRIED",
        title: "MARRIED",
      },
      {
        value: "DIVORCED",
        title: "DIVORCED",
      },
      {
        value: "SINGLE",
        title: "SINGLE",
      },
      {
        value: "WIDOW_WIDOWER",
        title: "WIDOW WIDOWER",
      },
    ],
  },
  {
    id: "loan-dependentAmount",
    name: "dependentAmount",
    label: "Your number of dependents",
    tag: "select",
    required: true,
    options: [
      {
        value: "",
        title: "Select dependent amount",
      },
      {
        value: 0,
        title: "0",
      },
      {
        value: 1,
        title: "1",
      },
      {
        value: 2,
        title: "2",
      },
      {
        value: 3,
        title: "3",
      },
      {
        value: 4,
        title: "4",
      },
      {
        value: 5,
        title: "5",
      },
      {
        value: 6,
        title: "6",
      },
    ],
  },
  {
    id: "loan-passportIssueDate",
    type: "text",
    name: "passportIssueDate",
    placeholder: "Select Date and Time",
    label: "Date of issue of the passport",
    required: true,
    tag: "input",
  },
  {
    id: "loan-passportIssueBranch",
    type: "text",
    name: "passportIssueBranch",
    placeholder: "000-000",
    label: "Division code",
    required: true,
    tag: "input",
  },
];

export const EMPLOYMENT_INPUTS_SECOND_STEP_INFO: ISecondStepInputs[] = [
  {
    id: "loan-employmentStatus",
    name: "employmentStatus",
    label: "Your employment status",
    tag: "select",
    required: true,
    options: [
      {
        value: "",
        title: "Select employment status",
      },
      {
        value: "UNEMPLOYED",
        title: "UNEMPLOYED",
      },
      {
        value: "SELF_EMPLOYED",
        title: "SELF EMPLOYED",
      },
      {
        value: "EMPLOYED",
        title: "EMPLOYED",
      },
      {
        value: "BUSINESS_OWNER",
        title: "BUSINESS OWNER",
      },
    ],
  },
  {
    id: "loan-employerINN",
    type: "text",
    name: "employerINN",
    placeholder: "000000000000",
    label: "Your employer INN",
    required: true,
    tag: "input",
  },
  {
    id: "loan-salary",
    type: "text",
    name: "salary",
    placeholder: "For example 100 000",
    label: "Your salary",
    required: true,
    tag: "input",
  },
  {
    id: "loan-position",
    name: "position",
    label: "Your position",
    tag: "select",
    required: true,
    options: [
      {
        value: "",
        title: "Select position",
      },
      {
        value: "WORKER",
        title: "WORKER",
      },
      {
        value: "MID_MANAGER",
        title: "MIDDLE MANAGER",
      },
      {
        value: "TOP_MANAGER",
        title: "TOP MANAGER",
      },
      {
        value: "OWNER",
        title: "OWNER",
      },
    ],
  },
  {
    id: "loan-workExperienceTotal",
    type: "text",
    name: "workExperienceTotal",
    placeholder: "For example 10",
    label: "Your work experience total",
    required: true,
    tag: "input",
  },
  {
    id: "loan-workExperienceCurrent",
    type: "text",
    name: "workExperienceCurrent",
    placeholder: "For example 2",
    label: "Your work experience current",
    required: true,
    tag: "input",
  },
];
