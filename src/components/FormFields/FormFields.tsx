import type { FC } from "react";
import { Input } from "@/components";
import type { IInputs } from "@/constants";
import "./FormFields.scss";

interface IFormField {
  legend: string;
  inputs: IInputs[];
};

const FormFields: FC<IFormField> = ({ inputs, legend }) => {
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
            required={item.required}
            placeholder={item.placeholder}
          />
        ))}
      </div>
    </fieldset>
  );
};

export { FormFields };
