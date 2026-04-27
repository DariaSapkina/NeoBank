import type { FC } from "react";
import { useFormikContext } from "formik";
import type { IInputProps, IFormInput } from "@/components";
import "./Select.scss";

const Select: FC<IInputProps> = ({ id, label, options, name, required }) => {
  const { setFieldValue, values } = useFormikContext<IFormInput>();

  return (
    <div className="select">
      <label
        htmlFor={id}
        className={`select__label ${required && "select__label_required"}`}
      >
        {label}
      </label>
      <select
        className="select__field"
        id={id}
        name={name}
        value={values[name as keyof IFormInput]}
        onChange={(e) => setFieldValue(name, Number(e.target.value))}
      >
        {options?.map((item, index) => (
          <option key={index} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Select };
