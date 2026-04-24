export interface IFormInput {
  amount: number;
  term: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  email: string;
  birthdate: string;
  passportSeries: string;
  passportNumber: string;
}

export type TInputOption = {
  title: string;
  value: number;
};

type InputTag = "input" | "select";

export interface IInputBase {
  id: string;
  placeholder?: string;
  label: string;
  required?: boolean;
  tag: InputTag;
  options?: TInputOption[];
}

export interface IInputProps extends IInputBase {
  type?: string;
  name: string;
  value: string;
}
