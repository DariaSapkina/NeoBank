import type { FC } from "react";
import { Button, ModalWindow } from "@/components";

interface ISuccessModalProps {
  active: boolean;
  onClose: () => void;
};

const DenySuccessModal: FC<ISuccessModalProps> = ({ active, onClose }) => {
  return (
    <ModalWindow
      active={active}
      setActive={onClose}
      title="Deny application"
      paragraph="Your application has been deny!"
      onClose={onClose}
    >
      <div className="paymentModals__buttonWrapperDenied">
        <Button title="Go home" radius="small" size="large" onClick={onClose} />
      </div>
    </ModalWindow>
  );
};

export { DenySuccessModal };
