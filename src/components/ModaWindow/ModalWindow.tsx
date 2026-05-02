import type { FC, ReactNode } from "react";
import Close_square from "@/assets/Close_square.svg";
import "./ModalWindow.scss";

interface IModalWindowProps {
  active: boolean;
  setActive: (value: boolean) => void;
  children: ReactNode;
  title: string;
}

const ModalWindow: FC<IModalWindowProps> = ({
  active,
  setActive,
  children,
  title,
}) => {
  return (
    <div
      className={`modalWindow ${active && "modalWindow_active"}`}
      onClick={() => setActive(false)}
    >
      <div
        className="modalWindow__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modalWindow__header">
          <h2 className="modalWindow__title">{title}</h2>
          <button
            className="modalWindow__closeBtn"
            onClick={() => setActive(false)}
          >
            <img src={Close_square} alt="" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export { ModalWindow };
