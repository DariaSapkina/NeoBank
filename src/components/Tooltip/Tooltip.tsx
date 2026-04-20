import { type FC, type ReactNode } from "react";
import "./Tooltip.scss";

interface ITooltipProps {
  tooltip: string;
  children: ReactNode;
}

const Tooltip: FC<ITooltipProps> = ({ tooltip, children }) => {
  return (
    <div className="tooltip" tabIndex={0}>
      {children}
      <span className="tooltip__text">{tooltip}</span>
    </div>
  );
};

export { Tooltip };
