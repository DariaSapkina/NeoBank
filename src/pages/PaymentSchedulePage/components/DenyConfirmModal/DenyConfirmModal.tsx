import type { FC } from "react";
import { Button, ModalWindow } from "@/components";

interface IConfirmModalProps {
  active: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

const DenyConfirmModal: FC<IConfirmModalProps> = ({
  active,
  onClose,
  onConfirm,
}) => {
  return (
    <ModalWindow
      active={active}
      setActive={onClose}
      title="Deny application"
      paragraph="You exactly sure, you want to cancel this application?"
      onClose={onClose}
    >
      <div className="paymentModals__buttonsWrapper">
        <div className="paymentModals__buttonWrapper">
          <Button
            title="Deny"
            radius="small"
            size="large"
            isReject={true}
            onClick={onConfirm}
          />
        </div>
        <div className="paymentModals__buttonWrapper">
          <Button title="Cancel" radius="small" size="large" onClick={onClose} />
        </div>
      </div>
    </ModalWindow>
  );
};

export { DenyConfirmModal };
