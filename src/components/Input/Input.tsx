import type { FC } from "react";
import { useFormikContext } from "formik";
import type { IInputProps, IFormInput } from "./Input.props";
import "./Input.scss";

const Input: FC<IInputProps> = ({
  id,
  type,
  placeholder,
  label,
  name,
  required,
}) => {
  const { submitCount, setFieldValue, errors, values } =
    useFormikContext<IFormInput>();

  const isSubmitted = (submitCount ?? 0) > 0;
  const isError = Boolean(errors[name as keyof IFormInput]);
  const isSuccess = isSubmitted && !errors[name as keyof IFormInput];

  return (
    <div className="input">
      <label
        htmlFor={id}
        className={`input__label ${required && "input__label_required"}`}
      >
        {label}
      </label>
      <div
        className={`input__wrapperAfter 
              ${isError && "input__wrapperAfter_error"} 
              ${isSuccess && "input__wrapperAfter_success"}
              `}
      >
        <input
          className={`input__field ${isError && "input__field_error"} `}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={values[name as keyof IFormInput]}
          onChange={(e) => setFieldValue(name, e.target.value)}
        />
      </div>

      {errors[name as keyof IFormInput] && (
        <p className="input__error">{errors[name as keyof IFormInput]}</p>
      )}
    </div>
  );
};

export { Input };
