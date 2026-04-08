import type { FC } from "react";
import clsx from "clsx";
import type { IButtonProps } from "./Button.props";
import "./Button.scss";

const Button: FC<IButtonProps> = ({
  title,
  radius,
  size,
  ariaLabel,
  onClick,
  icon,
}) => {
  const buttonClass = clsx(
    "button",
    radius === "small"
      ? "button_radius-small"
      : radius === "medium"
        ? "button_radius-medium"
        : "button_radius-large",
    size === "small"
      ? "button_size-small"
      : size === "medium"
        ? "button_size-medium"
        : "button_size-large",
    icon ? "button_hasIcon" : "",
  );

  return (
    <button className={buttonClass} onClick={onClick} aria-label={ariaLabel}>
      {icon ? <img src={icon} alt="" /> : ""}
      <span>{title}</span>
    </button>
  );
};

export { Button };
