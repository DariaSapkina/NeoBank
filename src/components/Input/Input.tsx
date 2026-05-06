import { useFormikContext } from "formik";
import type { IInputProps } from "./Input.props";
import "./Input.scss";

const Input = <T,>({
  id,
  type,
  placeholder,
  label,
  name,
  required,
  size,
}: IInputProps) => {
  const { submitCount, setFieldValue, errors, values } = useFormikContext<T>();

  const fieldName = name as keyof T;

  const isSubmitted = (submitCount ?? 0) > 0;
  const isError = Boolean(errors[fieldName]);
  const isSuccess = isSubmitted && !errors[fieldName];

  return (
    <div className={`input ${size && "input_large"}`}>
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
          value={String(values[fieldName] ?? "")}
          onChange={(e) => setFieldValue(name, e.target.value)}
        />
      </div>

      {errors[fieldName] && (
        <p className="input__error">{errors[fieldName] as string}</p>
      )}
    </div>
  );
};

export { Input };
