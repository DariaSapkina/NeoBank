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
  type,
}) => {
  const buttonClass = clsx(
    "button",
    radius === "small"
      ? "button_radius_small"
      : radius === "medium"
        ? "button_radius_medium"
        : "button_radius_large",
    size === "small"
      ? "button_size_small"
      : size === "medium"
        ? "button_size_medium"
        : "button_size_large",
    icon && "button_hasIcon",
  );

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      aria-label={ariaLabel}
      type={type || "button"}
    >
      {icon && <img src={icon} alt="" />}
      <span>{title}</span>
    </button>
  );
};

export { Button };
