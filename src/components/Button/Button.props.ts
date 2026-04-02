export type IButtonProps = {
  title: string;
  variant?: "rounded" | "less-rounded";
  ariaLabel?: string;
  onClick?: () => void;
};
