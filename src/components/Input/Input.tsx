import type { FC } from "react";
import { useFormikContext } from "formik";
import type { IInputProps, IFormInput } from "./Input.props";
import { renderField } from "@/utils";
import "./Input.scss";

const Input: FC<IInputProps> = ({
  id,
  type,
  placeholder,
  label,
  tag,
  options,
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
      {renderField(
        tag,
        isError,
        isSuccess,
        id,
        name,
        values[name as keyof IFormInput],
        setFieldValue,
        errors,
        options,
        type,
        placeholder,
      )}
    </div>
  );
};

export { Input };
