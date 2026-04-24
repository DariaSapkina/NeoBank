import { useFormikContext } from "formik";
import type { FC } from "react";
import type { IInputProps, IFormInput } from "./Input.props";
import { renderFieldFormFirstStep } from "@/utils";
import "./Input.scss";

const Input: FC<IInputProps> = ({
  id,
  type,
  placeholder,
  label,
  tag,
  options,
  value,
  name,
  required,
}) => {
  const { submitCount, setFieldValue, errors } = useFormikContext<IFormInput>();

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
      {renderFieldFormFirstStep(
        tag,
        isError,
        isSuccess,
        id,
        name,
        value,
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
