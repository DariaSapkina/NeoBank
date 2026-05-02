import type { FC } from "react";
import "./Checkbox.scss";

interface ICheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
}

const Checkbox: FC<ICheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <div className="checkox">
      <input
        className="checkbox__input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        type="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="checkbox__label">
        {label}
      </label>
    </div>
  );
};

export { Checkbox };
