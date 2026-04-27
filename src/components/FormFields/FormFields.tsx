import type { FC } from "react";
import { Input, Select } from "@/components";
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
        {inputs.map((item) =>
          item.tag === "input" ? (
            <Input
              key={item.id}
              id={item.id}
              type={item.type}
              label={item.label}
              name={item.name}
              required={item.required}
              placeholder={item.placeholder}
            />
          ) : (
            <Select
              key={item.id}
              id={item.id}
              label={item.label}
              name={item.name}
              options={item.options}
              required={item.required}
            />
          ),
        )}
      </div>
    </fieldset>
  );
};

export { FormFields };
