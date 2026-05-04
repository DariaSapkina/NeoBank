import { Input, Select } from "@/components";
import type { IInputs, ISecondStepInputs } from "@/constants";
import "./FormFields.scss";

interface IFormField {
  legend?: string;
  inputs: IInputs[] | ISecondStepInputs[];
  size?: string;
}

const FormFields = <T,>({ inputs, legend, size }: IFormField) => {
  return (
    <fieldset className="formFields">
      {legend && <legend className="formFields__groupTitle">{legend}</legend>}
      <div className="formFields__fieldGroup">
        {inputs.map((item) =>
          item.tag === "input" ? (
            <Input<T>
              key={item.id}
              id={item.id}
              type={item.type}
              label={item.label}
              name={item.name}
              required={item.required}
              placeholder={item.placeholder}
              size={size}
            />
          ) : (
            <Select<T>
              key={item.id}
              id={item.id}
              label={item.label}
              name={item.name}
              options={item.options}
              required={item.required}
              size={size}
            />
          ),
        )}
      </div>
    </fieldset>
  );
};

export { FormFields };
