import type { FC, ReactNode } from "react";
import Close_square from "@/assets/Close_square.svg";
import "./ModalWindow.scss";

interface IModalWindowProps {
  active: boolean;
  setActive: (value: boolean) => void;
  onClose?: () => void;
  children: ReactNode;
  title: string;
  paragraph: string;
};

const ModalWindow: FC<IModalWindowProps> = ({
  active,
  setActive,
  onClose,
  children,
  title,
  paragraph,
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
            onClick={() => {
              if (onClose) {
                onClose();
              } else {
                setActive(false);
              }
            }}
          >
            <img src={Close_square} alt="" />
          </button>
        </div>
        <p className="modalWindow__paragraph">{paragraph}</p>
        {children}
      </div>
    </div>
  );
};

export { ModalWindow };
