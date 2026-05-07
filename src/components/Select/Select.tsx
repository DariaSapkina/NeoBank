import { useFormikContext } from "formik";
import type { IInputProps } from "@/types";
import "./Select.scss";

const Select = <T,>({
  id,
  label,
  options,
  name,
  required,
  size,
}: IInputProps) => {
  const { setFieldValue, values, errors } = useFormikContext<T>();

  const fieldName = name as keyof T;

  return (
    <div className={`select ${size && "select_large"}`}>
      <label
        htmlFor={id}
        className={`select__label ${required && "select__label_required"}`}
      >
        {label}
      </label>
      <select
        className={`select__field ${errors[fieldName] && "select__field_error"}`}
        id={id}
        name={name}
        value={String(values[fieldName] ?? "")}
        onChange={(e) => setFieldValue(name, e.target.value)}
      >
        {options?.map((item, index) => (
          <option key={index} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
      {errors[fieldName] && (
        <p className="select__error">{errors[fieldName] as string}</p>
      )}
    </div>
  );
};

export { Select };
