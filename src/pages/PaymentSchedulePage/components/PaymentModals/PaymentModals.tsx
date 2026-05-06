import { useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetApplication, resetOffers } from "@/store";
import { DenyConfirmModal } from "../DenyConfirmModal/DenyConfirmModal";
import { DenySuccessModal } from "../DenySuccessModal/DenySuccessModal";
import "./PaymentModals.scss";

interface IPaymentModalsProps {
  modalWindowActive: boolean;
  setModalWindowActive: (value: boolean) => void;
};

const PaymentModals: FC<IPaymentModalsProps> = ({
  modalWindowActive,
  setModalWindowActive,
}) => {
  const navigate = useNavigate();
  const [successActive, setSuccessActive] = useState(false);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    setModalWindowActive(false);
    setSuccessActive(true);
  };

  const handleFinish = () => {
    dispatch(resetApplication());
    dispatch(resetOffers());
    navigate("/");
  };

  return (
    <>
      <DenyConfirmModal
        active={modalWindowActive}
        onClose={() => setModalWindowActive(false)}
        onConfirm={handleConfirm}
      />
      <DenySuccessModal active={successActive} onClose={handleFinish} />
    </>
  );
};

export { PaymentModals };
