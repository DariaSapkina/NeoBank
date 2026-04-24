import { Input } from "../Input";
import "./FormFields.scss";
import type { FC } from "react";
import type { IInputs } from "@/constants";
import type { FormikValues } from "formik";

interface IFormField {
  legend: string;
  inputs: IInputs[];
  values: FormikValues;
}

const FormFields: FC<IFormField> = ({ inputs, legend, values }) => {
  return (
    <fieldset className="formFields">
      <legend className="formFields__groupTitle">{legend}</legend>
      <div className="formFields__fieldGroup">
        {inputs.map((item) => (
          <Input
            key={item.id}
            id={item.id}
            type={item.type}
            label={item.label}
            name={item.name}
            tag={item.tag}
            options={item.options}
            value={values[item.name]}
            required={item.required}
            placeholder={item.placeholder}
          />
        ))}
      </div>
    </fieldset>
  );
};

export { FormFields };
