export type IButtonProps = {
  title: string;
  radius: "small" | "medium" | "large";
  size: "small" | "medium" | "large";
  ariaLabel?: string;
  onClick?: () => void;
  icon?: string;
  type?: "submit" | "reset";
  isReject?: boolean;
  isDisable?: boolean;
};
