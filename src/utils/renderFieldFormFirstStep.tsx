import type { TInputOption, IFormInput } from "@/components";
import type { FormikErrors } from "formik";

export const renderFieldFormFirstStep = (
  tag: string,
  isError: boolean,
  isSuccess: boolean,
  id: string,
  name: string,
  value: string,
  setFieldValue: (name: string, value: string | number) => void,
  errors: FormikErrors<IFormInput>,
  options?: TInputOption[],
  type?: string,
  placeholder?: string,
) => {
  switch (tag) {
    case "input":
      return (
        <>
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
              value={value}
              onChange={(e) => setFieldValue(name, e.target.value)}
            />
          </div>

          {errors[name as keyof IFormInput] && (
            <p className="input__error">{errors[name as keyof IFormInput]}</p>
          )}
        </>
      );
    case "select":
      return (
        <select
          className="input__field"
          id={id}
          name={name}
          value={value}
          onChange={(e) => setFieldValue(name, Number(e.target.value))}
        >
          {options?.map((item, index) => (
            <option key={index} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      );
    default:
      return null;
  }
};
