import { Button, ModalWindow } from "@/components";
import { useState, type FC } from "react";
import { useNavigate } from "react-router-dom";
import "./ModalsThirdStep.scss";

interface IModalsThirdStep {
  modalWindowActive: boolean;
  setModalWindowActive: (value: boolean) => void;
}

const ModalsThirdStep: FC<IModalsThirdStep> = ({
  modalWindowActive,
  setModalWindowActive,
}) => {
  const navigate = useNavigate();
  const [modalDeniedActive, setModalDeniedActive] = useState(false);
  return (
    <>
      <ModalWindow
        active={modalWindowActive}
        setActive={setModalWindowActive}
        title="Deny application"
        paragraph="You exactly sure, you want to cancel this application?"
      >
        <div className="modalsThirdStep__buttonsWrapper">
          <div className="modalsThirdStep__buttonWrapper">
            <Button
              title="Deny"
              radius="small"
              size="large"
              isReject={true}
              onClick={() => {
                setModalWindowActive(false);
                setModalDeniedActive(true);
              }}
            />
          </div>
          <div className="modalsThirdStep__buttonWrapper">
            <Button
              title="Send"
              radius="small"
              size="large"
              onClick={() => setModalWindowActive(false)}
            />
          </div>
        </div>
      </ModalWindow>
      <ModalWindow
        active={modalDeniedActive}
        setActive={setModalDeniedActive}
        title="Deny application"
        paragraph="Your application has been deny!"
      >
        <div className="modalsThirdStep__buttonWrapperDenied">
          <Button
            title="Send"
            radius="small"
            size="large"
            onClick={() => {
              setModalDeniedActive(false);
              navigate("/");
            }}
          />
        </div>
      </ModalWindow>
    </>
  );
};

export { ModalsThirdStep };
