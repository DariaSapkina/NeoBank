export interface IRequestFirstStep {
  applicationId: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
  monthlyPayment: number;
  rate: number;
  requestedAmount: number;
  term: number;
  totalAmount: number;
};

export interface IRequestSecondStep {
  gender: "MALE" | "FAMALE";
  maritalStatus: "MARRIED" | "DIVORCED" | "SINGLE" | "WIDOW_WIDOWER";
  dependentAmount: number;
  passportIssueDate: string;
  passportIssueBranch: string;
  employment: {
    employmentStatus:
      | "UNEMPLOYED"
      | "SELF_EMPLOYED"
      | "EMPLOYED"
      | "BUSINESS_OWNER";
    employerINN: string;
    salary: number;
    position: "WORKER" | "MID_MANAGER" | "TOP_MANAGER" | "OWNER";
    workExperienceTotal: number;
    workExperienceCurrent: number;
  };
  account: string;
};
