import type { FC } from "react";
import type { IButtonProps } from "./Button.props";
import "./Button.scss";

const Button: FC<IButtonProps> = ({
  title,
  variant = "less-rounded",
  onClick,
}) => {
  return (
    <button className={`button button_${variant}`} onClick={onClick}>
      {title}
    </button>
  );
};
export { Button };
